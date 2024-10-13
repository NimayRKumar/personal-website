export type ThemeType = {
  nav: string;
  animation: string;
  animationStyle: {opacity: number};
  card: {
    backgroundColor: string;
  };
  cardHeader: {
    backgroundColor: string
  };
  button: {
    backgroundColor: string;
    hoverBackgroundColor: string;
  };

  textColor: string;
}

export const lightTheme = {
  nav: '#d3d3d3',
  animation: 'gradientWave',
  animationStyle: {opacity: .5},
  button: { backgroundColor: '#d3d3d3', hoverBackgroundColor: '#0056b3'},
  card: { backgroundColor: 'rgba(255, 255, 255, 0.2)', border: '1px solid rgba(0, 0, 0, 0.2)'},
  cardHeader: { backgroundColor: '#d3d3d3' },
  textColor: '#000',
}

export const darkTheme = {
  nav: '#000',
  animation: 'neuralNetwork',
  animationStyle: {opacity: .5},
  button: { backgroundColor: '#001f3f', hoverBackgroundColor: '#0056b3'},
  card: { backgroundColor: 'rgba(0, 0, 0, 0.2)', border: '1px solid rgba(255, 255, 255, 0.2)' },
  cardHeader: { backgroundColor: '#001f3f' },
  textColor: '#fff'
}