export const Node = (value = null, nextNode = null) => {
  const getValue = () => value;

  const getNextNode = () => nextNode;

  const setValue = (value) => {
    value = value;
  };

  const setNextNode = (node) => {
    nextNode = node;
  };

  return { getValue, getNextNode, setValue, setNextNode };
};
