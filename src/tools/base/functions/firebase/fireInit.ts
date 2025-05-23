
// ---------- set Local Imports
import { initializeApp } from 'firebase/app';
import { setVar } from '../';

type Tprops = { args: any; pass: { fbConfig: any; arrFuncs: any[] } };

export const fireInit = async (props: Tprops) => {
  console.log('fireInit');
  // ---------- set Props
  const { args, pass } = props;
  const { fbConfig } = pass;

  if (typeof fbConfig !== 'string') {
    return console.log('Erro Ao inicializar o Firebase', fbConfig);
  }

  console.log('BOX', { fbConfig });

  // ---------- set FB Init on a Variable
  const fbInit = initializeApp(fbConfig, 'secondary');
  console.log({ fbInit });

  setVar({
    args: {},
    pass: { keyPath: ['all.temp.fireInit'], value: [fbInit] },
  });
};
