# Lab 1

## Source Code
```js
[0.2, 0.3, 0.4, 0.6, 0.7, 0.8].forEach(p => {
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
  { n: 5, relativeFrequency: 0.611 },
  { n: 10, relativeFrequency: 0.578 },
  { n: 50, relativeFrequency: 0.529 },
  { n: 100, relativeFrequency: 0.522 }
]
for p = 0.3 [
  { n: 5, relativeFrequency: 0.533 },
  { n: 10, relativeFrequency: 0.514 },
  { n: 50, relativeFrequency: 0.532 },
  { n: 100, relativeFrequency: 0.511 }
]
for p = 0.4 [
  { n: 5, relativeFrequency: 0.535 },
  { n: 10, relativeFrequency: 0.507 },
  { n: 50, relativeFrequency: 0.522 },
  { n: 100, relativeFrequency: 0.522 }
]
for p = 0.6 [
  { n: 5, relativeFrequency: 0.47 },
  { n: 10, relativeFrequency: 0.458 },
  { n: 50, relativeFrequency: 0.448 },
  { n: 100, relativeFrequency: 0.495 }
]
for p = 0.7 [
  { n: 5, relativeFrequency: 0.451 },
  { n: 10, relativeFrequency: 0.471 },
  { n: 50, relativeFrequency: 0.492 },
  { n: 100, relativeFrequency: 0.501 }
]
for p = 0.8 [
  { n: 5, relativeFrequency: 0.404 },
  { n: 10, relativeFrequency: 0.448 },
  { n: 50, relativeFrequency: 0.475 },
  { n: 100, relativeFrequency: 0.474 }
]
```

## Conjecture

As $n$ becomes large the limiting value
for $P(\text{Bob tosses more heads than Alice})$
approaches $p$, the probability of heads.
