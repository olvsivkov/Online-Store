
export function counterGoods(event: Event  & { target: Element }): void {
  const target = event.target;
  if(target.classList.contains('counter-minus')) { console.log('minus');}
  else if(target.classList.contains('counter-plus')) { console.log('plus');}
  else  { console.log('no');}
}
