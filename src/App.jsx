import { createSignal } from 'solid-js';
import { customElement } from 'solid-element';
import { register } from 'component-register';

import Nested from './nested';
import '@blockquote-playground/blockquote-playground-lit-counter/define/blockquote-playground-lit-counter.js';
import logo from './logo.svg';
import styles from './App.module.css';

customElement('blockquote-playground-lit-counter');

function App() {
  const [count, setCount] = createSignal(10);
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit
          <code>
            <span> {count} </span>
          </code>
          and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
      <section>
        <blockquote-playground-lit-counter
          oncounter-changed={() => setCount(count() - 1)}
          heading="From Lit"
          heading-level="2"
          counter="10"
        ><p>Light Dom</p></blockquote-playground-lit-counter>
      </section>
      <Nested />
    </div>
  );
}

export default App;
