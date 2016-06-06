#### CSS Conventions

- component's styles reside in the component's folder (imported via CSS modules)
- class names are camelCased
- global class names (e.g. layouts) start with small letter, component class names start with the capital letter
- BEM:
    - .block
    - .blockModifier - modifiers that can be used independent of the base class: ```<input class="inputLarge" />```
    - .block_modifier - modifiers that overwrite properties of the base class (require base class): ```<input class="input input_large />```
    - .block__element
