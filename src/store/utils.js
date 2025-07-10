//brug flere refs
export function mergeRefs(...refs) {
  return (node) => {
    refs.forEach(ref => {
      if (typeof ref === "function") {
        ref(node);
      } else if (ref != null) {
        ref.current = node;
      }
    });
  };
}

//vis kun hvis event er aktiv
export const activeEvent = (events) => events.filter((event) => event.aktuel === true);

//vis kun hvis event er inaktiv
export const inActiveEvent = (events) => events.filter((event) => event.aktuel === false);