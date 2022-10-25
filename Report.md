# Lab 2

## Results / Output
```js
[
  { a: 10, c: 90, relativeFrequency: 0.5035 },
  { a: 50, c: 50, relativeFrequency: 0.4975 },
  { a: 90, c: 10, relativeFrequency: 0.511 }
]
```

## Conjecture
Results demonstrate that indeed,
$$
P(\text{last ball is carmine}) = P(\text{last ball is carmine}) = 1/2
$$,
and that this probability is independent of the initial values of $a$ and $c$.

## Source Code (not required)
```js
// find relative frequency of last ball being azure
//
//                      number of trials in which last ball was azure
// relative frequency = —————————————————————————————————————————————
//                                 total number of trials

const experiments = [
  { a: 10 },
  { a: 50 },
  { a: 90 },
];

experiments.forEach(experiment => {
  const { a } = experiment;
  experiment.c = 100 - a;
  let successes = 0;

  const trials = 2000; // run 2000 trials

  for (let i = 0; i < trials; i++) {

    const urn = {
      azure: experiment.a,
      carmine: experiment.c,
      get total() {
        return this.azure + this.carmine;
      }
    };

    let predecessor = null;

    while (true) {
      // select random ball from urn
      const probOfAzure = urn.azure / urn.total;
      const selected = Math.random() < probOfAzure ? 'azure' : 'carmine';

      // if no predecessor or same as predecessor
      if (!predecessor || selected === predecessor) {
        urn[selected]--; // discard
        predecessor = selected;

        // continue if balls remain
        if (urn.total > 0) continue;

        // else, check if last ball discarded was azure
        if (selected === 'azure') successes++;
        break; // stop
      }
      
      // different from predecesor: put it back, restart procedure
      predecessor = null;
    }
  }

  // compute relative frequency
  experiment.relativeFrequency = successes / trials;
});

console.log(experiments);

```
