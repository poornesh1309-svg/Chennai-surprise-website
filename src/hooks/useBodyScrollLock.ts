import { useEffect } from 'react';

let lockCount = 0;

export function useBodyScrollLock(isLocked: boolean) {
  useEffect(() => {
    if (isLocked) {
      lockCount++;
      document.body.style.overflow = 'hidden';
    }

    return () => {
      if (isLocked) {
        lockCount = Math.max(0, lockCount - 1);
        if (lockCount === 0) {
          document.body.style.overflow = 'unset';
        }
      }
    };
  }, [isLocked]);
}
