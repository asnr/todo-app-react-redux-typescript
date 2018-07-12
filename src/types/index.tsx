export interface IStoreState {
  languageName: string;
  enthusiasmLevel: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}
