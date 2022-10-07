[0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8].forEach(p => {
  const experiments = [
    { n: 5 },
    { n: 10 },
    { n: 50 },
    { n: 100 },
  ];

  function flip(coins) {
    let heads = 0;
    for (let i = 0; i < coins; i++)
      if (Math.random() > p) heads++;
    return heads;
  }

  experiments.forEach(experiment => {
    const { n } = experiment;
    const trials = 1000;
    let successes = 0;

    for (let t = 0; t < trials; t++) {
      const bob = flip(n + 1);
      const alice = flip(n);
      if (bob > alice) successes++;
    }

    experiment.relativeFrequency = successes / trials;
  });

  console.log(`for p = ${p}`, experiments);
});
