import React, { useState, useEffect } from 'react';
import { Mail, Gift, Phone, Heart, Sparkles, MessageSquare, Check, Calendar, User, Upload, Trash2, Loader2, Image as ImageIcon, FileImage, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import heic2any from 'heic2any';
import { SERVICES } from '../data';

interface AttachedPhoto {
  id: string;
  name: string;
  url: string;
  size: string;
  isHEIC: boolean;
  originalName: string;
}

interface ContactFormProps {
  selectedServiceId: string;
  setSelectedServiceId: (serviceId: string) => void;
}

export default function ContactForm({ selectedServiceId, setSelectedServiceId }: ContactFormProps) {
  const [formData, setFormData] = useState({
    customerName: '',
    surprisedName: '',
    contactNumber: '',
    eventDate: '',
    serviceId: '',
    requirements: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [attachedPhotos, setAttachedPhotos] = useState<AttachedPhoto[]>([]);
  const [isConverting, setIsConverting] = useState(false);
  const [conversionProgress, setConversionProgress] = useState('');
  const [fileError, setFileError] = useState<string | null>(null);

  // Sync selectedServiceId prop with local state
  useEffect(() => {
    if (selectedServiceId) {
      setFormData((prev) => ({ ...prev, serviceId: selectedServiceId }));
    }
  }, [selectedServiceId]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    try {
      // 1st burst: Large playful central burst with cute shades
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#FF8FA3', '#FFCCD5', '#FFE082', '#64B5F6', '#B39DDB', '#FF8FA3']
      });

      // Staggered continuous side cannons for 1.5 seconds to build peak excitement!
      const end = Date.now() + 1500;
      const frame = () => {
        confetti({
          particleCount: 3,
          angle: 60,
          spread: 55,
          origin: { x: 0, y: 0.75 },
          colors: ['#FF8FA3', '#FFCCD5', '#FFE082', '#64B5F6']
        });
        confetti({
          particleCount: 3,
          angle: 120,
          spread: 55,
          origin: { x: 1, y: 0.75 },
          colors: ['#FF8FA3', '#FFCCD5', '#FFE082', '#64B5F6']
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };
      setTimeout(frame, 180);
    } catch (err) {
      console.warn('Confetti burst failed', err);
    }
  };

  const handleCloseSuccess = () => {
    setIsSubmitted(false);
    // Revoke object URLs to avoid memory leaks
    attachedPhotos.forEach(photo => URL.revokeObjectURL(photo.url));
    setAttachedPhotos([]);
    setFileError(null);
    // Reset form after a successful request submission
    setFormData({
      customerName: '',
      surprisedName: '',
      contactNumber: '',
      eventDate: '',
      serviceId: '',
      requirements: ''
    });
    setSelectedServiceId('');
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setIsConverting(true);
    setFileError(null);
    setConversionProgress('Initializing images processing...');

    const loadedPhotos: AttachedPhoto[] = [...attachedPhotos];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const isHEIC = file.name.toLowerCase().endsWith('.heic') || file.name.toLowerCase().endsWith('.heif') || file.type === 'image/heic' || file.type === 'image/heif';

      try {
        if (isHEIC) {
          setConversionProgress(`Converting iPhone photo "${file.name}" to JPG format...`);
          const convertedBlob = await heic2any({
            blob: file,
            toType: 'image/jpeg',
            quality: 0.8
          });

          const blobToUse = Array.isArray(convertedBlob) ? convertedBlob[0] : convertedBlob;
          const convertedUrl = URL.createObjectURL(blobToUse);
          
          loadedPhotos.push({
            id: Math.random().toString(36).substring(2, 11),
            name: file.name.replace(/\.(heic|heif)$/i, '.jpg'),
            url: convertedUrl,
            size: (blobToUse.size / (1024 * 1024)).toFixed(2) + ' MB',
            isHEIC: true,
            originalName: file.name
          });
        } else {
          const url = URL.createObjectURL(file);
          loadedPhotos.push({
            id: Math.random().toString(36).substring(2, 11),
            name: file.name,
            url: url,
            size: (file.size / (1024 * 1024)).toFixed(2) + ' MB',
            isHEIC: false,
            originalName: file.name
          });
        }
      } catch (error) {
        console.error('Failed to process image file:', error);
        setFileError(`Could not convert "${file.name}". Please upload a standard image or verify the HEIC content.`);
      }
    }

    setAttachedPhotos(loadedPhotos);
    setIsConverting(false);
    setConversionProgress('');
  };

  const handleRemovePhoto = (id: string) => {
    const photoToRemove = attachedPhotos.find(p => p.id === id);
    if (photoToRemove) {
      URL.revokeObjectURL(photoToRemove.url);
    }
    setAttachedPhotos((prev) => prev.filter(p => p.id !== id));
  };

  // Generate customized WhatsApp text based on form inputs
  const getWhatsAppMessage = () => {
    const selectedService = SERVICES.find(s => s.id === formData.serviceId)?.name || 'a custom surprise';
    const photosCount = attachedPhotos.length;
    const photoDetails = photosCount > 0 
      ? `\nPhotos Attached: ${photosCount} image(s) (${attachedPhotos.map(p => `${p.name}${p.isHEIC ? ' [Converted HEIC]' : ''}`).join(', ')})`
      : '';
    const text = `Hi Chennai Surprise!\n\nI want to plan a magical surprise!\n\nSurprise Type: ${selectedService}\nSurprising: ${formData.surprisedName || 'Someone Special'}\nBig Day: ${formData.eventDate || 'TBD'}\nMy Name: ${formData.customerName || 'TBD'}\nContact: ${formData.contactNumber || 'TBD'}\nNotes: ${formData.requirements || 'None'}${photoDetails}\n\nPlease help me coordinate!`;
    return encodeURIComponent(text);
  };

  return (
    <section id="contact-booking" className="py-16 px-4 sm:py-24 bg-white relative">
      {/* Decorative Confetti Background Circles */}
      <div className="absolute top-24 left-[10%] w-6 h-6 bg-pink-100 rounded-full opacity-60 animate-bounce-subtle" />
      <div className="absolute bottom-20 right-[8%] w-8 h-8 bg-yellow-50 rounded-full opacity-60 animate-float" />
      <div className="absolute top-1/2 right-[12%] w-5 h-5 bg-sky-100 rounded-full opacity-60 animate-float-slow" />

      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        
        {/* Header Block */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-pink-50 border border-pink-100 rounded-full">
            <Gift className="w-3.5 h-3.5 text-pink-400 animate-wiggle" />
            <span className="font-display text-xs font-bold text-pink-500 uppercase tracking-wider">
              Magical Booking Form
            </span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#4A4A4A] font-bold">
            Plan Your Secret <span className="text-pink-400">Surprise Letter</span>
          </h2>
          
          <p className="font-sans text-gray-500">
            Write down your ideas in our sweet love-letter booking form! We will sneakily reach out to you within 2-3 hours via WhatsApp or phone to finalize the secret coordinate.
          </p>
        </div>

        {/* The Letter Form Container */}
        <div className="bg-[#FFF9FB] p-6 sm:p-10 relative border border-pink-100 rounded-[32px] shadow-sm">
          
          {/* Post Stamp Watermark */}
          <div className="absolute top-6 right-6 w-16 h-16 border border-dashed border-pink-200 rounded-xl flex items-center justify-center text-pink-300 font-display text-xs rotate-12 hidden sm:flex">
            Chennai
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Field 1: Customer Name */}
              <div className="space-y-1.5">
                <label className="font-display text-sm font-bold text-gray-600 flex items-center gap-2">
                  <User className="w-4 h-4 text-pink-400" />
                  Your Name
                </label>
                <input
                  type="text"
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-4 py-3 bg-white border border-pink-100 rounded-2xl focus:border-pink-300 outline-none font-sans text-sm shadow-xs transition-all"
                />
              </div>

              {/* Field 2: Surprised Person Name */}
              <div className="space-y-1.5">
                <label className="font-display text-sm font-bold text-gray-600 flex items-center gap-2">
                  <Heart className="w-4 h-4 text-pink-400 fill-pink-300" />
                  Who are we Surprising?
                </label>
                <input
                  type="text"
                  name="surprisedName"
                  value={formData.surprisedName}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. Sneha (My Wife)"
                  className="w-full px-4 py-3 bg-white border border-pink-100 rounded-2xl focus:border-pink-300 outline-none font-sans text-sm shadow-xs transition-all"
                />
              </div>

              {/* Field 3: WhatsApp Number */}
              <div className="space-y-1.5">
                <label className="font-display text-sm font-bold text-gray-600 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#25D366] fill-current" />
                  Your WhatsApp Number
                </label>
                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. 09791197692"
                  className="w-full px-4 py-3 bg-white border border-pink-100 rounded-2xl focus:border-pink-300 outline-none font-sans text-sm shadow-xs transition-all"
                />
              </div>

              {/* Field 4: Event Date */}
              <div className="space-y-1.5">
                <label className="font-display text-sm font-bold text-gray-600 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-sky-400" />
                  When is the Surprise?
                </label>
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-pink-100 rounded-2xl focus:border-pink-300 outline-none font-sans text-sm shadow-xs transition-all"
                />
              </div>

            </div>

            {/* Field 5: Select Service */}
            <div className="space-y-1.5">
              <label className="font-display text-sm font-bold text-gray-600 flex items-center gap-2">
                <Gift className="w-4 h-4 text-pink-400" />
                Select Magical Theme
              </label>
              <select
                name="serviceId"
                value={formData.serviceId}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-white border border-pink-100 rounded-2xl focus:border-pink-300 outline-none font-sans text-sm shadow-xs transition-all cursor-pointer"
              >
                <option value="">-- Choose an adorable service --</option>
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name}
                  </option>
                ))}
                <option value="custom">Something entirely custom!</option>
              </select>
            </div>



            {/* Action CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-center sm:text-left text-xs text-gray-400 font-medium max-w-sm">
                We protect your secrets! We never call you when your partner is likely nearby unless you give us the okay.
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                {/* Instant WhatsApp Send */}
                <a
                  id="direct-whatsapp-book"
                  href={`https://wa.me/919791197692?text=${getWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cute-btn-blue text-base w-full sm:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white border border-[#25D366] shadow-sm font-bold flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.031 2c-5.514 0-9.989 4.475-9.989 9.989 0 1.763.459 3.42 1.258 4.876L2 22l5.314-1.395c1.417.771 3.033 1.205 4.717 1.205 5.514 0 9.989-4.475 9.989-9.989S17.545 2 12.031 2zm4.84 13.568c-.27.754-1.347 1.378-1.855 1.419-.508.041-1.01.218-3.275-.675-2.73-1.077-4.46-3.854-4.597-4.037-.137-.182-1.11-1.474-1.11-2.81 0-1.337.701-1.996.95-2.259.25-.262.543-.329.725-.329.182 0 .365.004.523.012.162.008.38-.033.593.479.218.528.746 1.816.811 1.948.065.132.109.284.02.463-.089.178-.134.293-.267.449-.134.156-.282.348-.403.468-.134.132-.275.276-.118.545.158.269.7 1.15 1.5 1.861.802.712 1.476.932 1.684 1.022.208.09.333.078.458-.066.125-.144.536-.622.681-.836.145-.213.29-.178.489-.103.199.074 1.261.593 1.478.7.218.107.363.161.416.252.054.091.054.528-.162 1.282z" />
                  </svg>
                  Enquire on WhatsApp
                </a>

              </div>
            </div>

          </form>
        </div>

        {/* Hot Quick Connect Info cards */}
        <div className="grid grid-cols-1 gap-6 max-w-xs mx-auto">
          <a
            href="tel:+919791197692"
            className="border border-sky-100 p-4 rounded-3xl bg-sky-50/20 hover:bg-sky-50/50 flex items-center gap-4 transition-colors text-center sm:text-left justify-center sm:justify-start shadow-xs group"
          >
            <div className="p-3 bg-[#29B6F6] text-white rounded-full border border-sky-400 shadow-xs shrink-0 group-hover:scale-105 transition-transform">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-gray-400 block tracking-wide">Call</span>
              <span className="font-display text-base font-bold text-gray-700 block">09791197692</span>
            </div>
          </a>
        </div>

      </div>

      {/* Booking Success Cute Mascot Dialog */}
      {isSubmitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div 
            id="booking-success-modal"
            className="bg-white border border-pink-100 rounded-[32px] p-8 max-w-md w-full text-center shadow-2xl relative space-y-6"
          >
            {/* Mascot Cheer SVG */}
            <div className="w-32 h-32 mx-auto relative">
              <svg viewBox="0 0 100 100" className="w-full h-full animate-float">
                {/* Cat Ears */}
                <path d="M 25 35 L 15 10 L 40 25 Z" fill="#FFCCD5" stroke="#FF8FA3" strokeWidth="3" />
                <path d="M 75 35 L 85 10 L 60 25 Z" fill="#FFCCD5" stroke="#FF8FA3" strokeWidth="3" />
                <circle cx="50" cy="55" r="35" fill="#FFF0F3" stroke="#FF8FA3" strokeWidth="3" />
                
                {/* Hearts for Eyes */}
                <path d="M 30 50 Q 34 45 38 50 T 46 50 Q 38 58 30 50" fill="#FF8FA3" transform="scale(0.8) translate(10, 10)" />
                <path d="M 60 50 Q 64 45 68 50 T 76 50 Q 68 58 60 50" fill="#FF8FA3" transform="scale(0.8) translate(22, 10)" />

                {/* Blushes */}
                <ellipse cx="25" cy="62" rx="6" ry="3" fill="#FF8FA3" opacity="0.6" />
                <ellipse cx="75" cy="62" rx="6" ry="3" fill="#FF8FA3" opacity="0.6" />

                <path d="M 50 60 Q 46 64 42 62 M 50 60 Q 54 64 58 62" fill="none" stroke="#4A3E3D" strokeWidth="2" />
              </svg>
              <Heart className="w-6 h-6 text-[#FF8FA3] fill-[#FF8FA3] absolute top-1 right-2 animate-bounce-subtle" />
              <Sparkles className="w-5 h-5 text-[#FFE082] absolute bottom-2 left-1 animate-wiggle" />
            </div>

            <div className="space-y-2">
              <h3 className="font-display text-2xl text-pink-500 font-bold">Letter Received!</h3>
              <p className="font-sans text-gray-500 text-sm">
                Woohoo! Puffy has delivered your secret request to our Chennai team. We are already blushing and brainstorming!
              </p>
            </div>

            <div className="p-4 bg-yellow-50/20 border border-dashed border-yellow-200 rounded-2xl text-xs text-gray-500 leading-relaxed text-left">
              <strong>Pro-Tip:</strong> Click the WhatsApp link below to instantly send us your form details. This speeds up booking confirmation significantly!
            </div>

            <div className="flex flex-col gap-2">
              <a
                id="success-whatsapp-send"
                href={`https://wa.me/919791197692?text=${getWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="cute-btn-blue text-sm w-full bg-[#25D366] hover:bg-[#128C7E] text-white border border-[#25D366] shadow-sm font-bold animate-pulse"
              >
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.031 2c-5.514 0-9.989 4.475-9.989 9.989 0 1.763.459 3.42 1.258 4.876L2 22l5.314-1.395c1.417.771 3.033 1.205 4.717 1.205 5.514 0 9.989-4.475 9.989-9.989S17.545 2 12.031 2zm4.84 13.568c-.27.754-1.347 1.378-1.855 1.419-.508.041-1.01.218-3.275-.675-2.73-1.077-4.46-3.854-4.597-4.037-.137-.182-1.11-1.474-1.11-2.81 0-1.337.701-1.996.95-2.259.25-.262.543-.329.725-.329.182 0 .365.004.523.012.162.008.38-.033.593.479.218.528.746 1.816.811 1.948.065.132.109.284.02.463-.089.178-.134.293-.267.449-.134.156-.282.348-.403.468-.134.132-.275.276-.118.545.158.269.7 1.15 1.5 1.861.802.712 1.476.932 1.684 1.022.208.09.333.078.458-.066.125-.144.536-.622.681-.836.145-.213.29-.178.489-.103.199.074 1.261.593 1.478.7.218.107.363.161.416.252.054.091.054.528-.162 1.282z" />
                </svg>
                Send Details via WhatsApp
              </a>

              <button
                id="close-success-btn"
                onClick={handleCloseSuccess}
                className="cute-btn-pink text-sm w-full !bg-white !text-gray-500 border border-pink-100 hover:!bg-pink-50/50 font-bold"
              >
                Got It, Thank You!
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
