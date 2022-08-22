export type RootStackParamList = {
  Form: undefined;
};

// Type useNavigation hook function inputs (push, navigate, ...)
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
