export function textInputBlur(){
  window.angularComponentRef.zone.run(() =>
  {
    window.angularComponentRef.componentFn(this.getAttribute("data-index"),this.value);
  }

  )
}
