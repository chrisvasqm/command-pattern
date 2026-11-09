export default interface Action {
  do(): void;
  undo(): void;
}