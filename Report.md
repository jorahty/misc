# Lab 1

## Source Code
```js
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
```

## Output
```js
for p = 0.2 [
  { n: 5, relativeFrequency: 0.594 },
  { n: 10, relativeFrequency: 0.566 },
  { n: 50, relativeFrequency: 0.501 },
  { n: 100, relativeFrequency: 0.531 }
]
for p = 0.3 [
  { n: 5, relativeFrequency: 0.539 },
  { n: 10, relativeFrequency: 0.523 },
  { n: 50, relativeFrequency: 0.535 },
  { n: 100, relativeFrequency: 0.533 }
]
for p = 0.4 [
  { n: 5, relativeFrequency: 0.495 },
  { n: 10, relativeFrequency: 0.537 },
  { n: 50, relativeFrequency: 0.512 },
  { n: 100, relativeFrequency: 0.518 }
]
for p = 0.5 [
  { n: 5, relativeFrequency: 0.493 },
  { n: 10, relativeFrequency: 0.504 },
  { n: 50, relativeFrequency: 0.496 },
  { n: 100, relativeFrequency: 0.49 }
]
for p = 0.6 [
  { n: 5, relativeFrequency: 0.479 },
  { n: 10, relativeFrequency: 0.474 },
  { n: 50, relativeFrequency: 0.5 },
  { n: 100, relativeFrequency: 0.507 }
]
for p = 0.7 [
  { n: 5, relativeFrequency: 0.471 },
  { n: 10, relativeFrequency: 0.461 },
  { n: 50, relativeFrequency: 0.486 },
  { n: 100, relativeFrequency: 0.508 }
]
for p = 0.8 [
  { n: 5, relativeFrequency: 0.392 },
  { n: 10, relativeFrequency: 0.445 },
  { n: 50, relativeFrequency: 0.474 },
  { n: 100, relativeFrequency: 0.461 }
]
```

## Conjecture

As $n$ becomes large the limiting value
for $P(\text{Bob tosses more heads than Alice})$
approaches $p$, the probability of heads.
