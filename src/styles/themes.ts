export type ThemeType = {
  nav: string;
  navHover: string;
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
  navHover: '#636363',
  animation: 'gradientWave',
  animationStyle: {opacity: .5},
  button: { backgroundColor: '#d3d3d3', hoverBackgroundColor: '#636363'},
  card: { backgroundColor: 'rgba(255, 255, 255, 0.2)', border: '1px solid rgba(0, 0, 0, 0.2)'},
  cardHeader: { backgroundColor: '#d3d3d3' },
  textColor: '#000',
}

export const darkTheme = {
  nav: '#000',
  navHover: '#70b7e0',
  animation: 'neuralNetwork',
  animationStyle: {opacity: .5},
  button: { backgroundColor: '#001f3f', hoverBackgroundColor: '#70b7e0'},
  card: { backgroundColor: 'rgba(0, 0, 0, 0.2)', border: '1px solid rgba(255, 255, 255, 0.2)' },
  cardHeader: { backgroundColor: '#001f3f' },
  textColor: '#fff'
}