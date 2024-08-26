function updateCounter() {
  const counterValue = document.querySelector("#counter-value");
  const counter = store.getState().value;
  console.log("Counter:", counter);
  counterValue.textContent = counter;
}

store.subscribe(updateCounter);

document.querySelector("#increment").addEventListener("click", () => {
  store.dispatch(counterActions.increment());
});

document.querySelector("#decrement").addEventListener("click", () => {
  store.dispatch(counterActions.decrement());
});

// Initial update
updateCounter();
