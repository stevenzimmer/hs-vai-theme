

  LottieInteractivity.create({
    mode:"scroll",
    player: "#homepage-hero-lottie",
    container: "#home-container",
    actions: [
      {
        visibility: [0.1, .65],
        type: 'seek',
        frames: [0],
      },
    ]
  });

  