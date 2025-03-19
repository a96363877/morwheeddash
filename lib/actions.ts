

export const playNotificationSound = () => {
    const audio=new Audio('/npt.wav')
    if (audio) {
      audio!.play().catch((error) => {
        console.error('Failed to play sound:', error);
      });
    }
  };