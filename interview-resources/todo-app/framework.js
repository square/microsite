/* v1.0 */
const Framework = (function() {

  // TEMPLATE FETCHING & RENDERING

  function getTemplate(id) {
    return document.getElementById(id).innerHTML;
  }

  function stringToElement(string) {
    return document.createRange()
      .createContextualFragment(string)
      .children[0];
  }

  function templateToElement(template, data) {
    const string = Mustache.render(getTemplate(template), data);
    return stringToElement(string);
  }

  // PERSISTING STATE WITH LOCALSTORAGE

  function saveState() {
    localStorage.setItem('appState', JSON.stringify(store.state));
  }

  function loadState() {
    const schema = defaultState();
    const newSchemaStr = JSON.stringify(schema);
    const oldSchemaStr = localStorage.getItem('defaultState');

    if (newSchemaStr !== oldSchemaStr) {
      localStorage.clear();
      localStorage.setItem('defaultState', newSchemaStr);
      return schema;
    }

    const savedState = localStorage.getItem('appState');
    if (savedState) {
      return JSON.parse(savedState);
    }
    return schema;
  }

  // UPDATING THE DOM WITH RENDERED APP

  function updateApp() {
    let app = document.getElementById('app');
    if (!app) {
      document.body.appendChild(stringToElement(
        '<div id="app"></div>'
      ));
      app = document.getElementById('app');
    }
    app.parentNode.replaceChild(renderApp(), app);
  }

  // "SMART" EVENT BINDING

  function addListeners(element, map) {
    Object.entries(map).forEach(([eventSelector, listener]) => {
      const [event, ...selectorParts] = eventSelector.split(' ');
      const selector = selectorParts.join(' ');
      const nodes = element.querySelectorAll(selector);
      nodes.forEach((node) => {
        node.addEventListener(event, enhanceListener(listener));
      });
    });
    return element;
  }

  function enhanceListener(listener) {
    return (e) => {
      const preState = JSON.stringify(store.state);
      listener(e);
      const postState = JSON.stringify(store.state);

      if (preState === postState) {
        // no changes to state, skip re-rendering
        return;
      }

      let newTodo = document.querySelector('.new-todo');
      let savedNewTodoVal = newTodo.value;
      let refocusNewTodo = document.activeElement === newTodo;

      updateApp();

      newTodo = document.querySelector('.new-todo');
      newTodo.value = savedNewTodoVal;
      if (refocusNewTodo || !store.hasTodos()) {
        newTodo.focus();
        const position = newTodo.value.length;
        newTodo.setSelectionRange(position, position);
      }

      saveState();
    };
  }


  return {
    addListeners,
    loadState,
    templateToElement,
    updateApp,
  }
})();