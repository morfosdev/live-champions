

          // ---------- import React Packs
          import React from 'react';
          import * as RN from 'react-native';

          // ---------- import Variables Pack
          import { create } from 'zustand';

          // ---------- import Local Tools
          import { mapElements } from './tools/base/project/mapElements';
          import * as functions from './tools/base/functions';
          import * as Elements from './tools/base/Elements';
          import { Project } from './tools/base/project';
          import * as jsvals from './tools/base/jsvals';
          import { props } from './tools/base/props';
          import * as customs from './tools/customs';
          import * as stls from './tools/base/stls';
          import { tools } from './tools';

          // ---------- set Caps Inputs
          const currRoute = 'home';

          let args: any = [];

          const screens = [
            
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"home",

          styles:[`{
width: "100%",
height: "100%",
backgroundColor: "#FFF",
alignItems: "center",
}`],

          screenElements:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: "100%",
flexDirection: "row",
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: "30px",
height: "30px",
borderRadius: "10px",
backgroundColor: "#FFF",
position: "absolute",
top: "170px",
left: "80px",
alignItems: "center",
justifyContent: "center",
opacity: "80%",
}`],

            functions:[()=>{}],            childrenItems:[() => {
	const [sttNumber, setNumber] = React.useState(0);

 const path1 = "sc.A0.forms.iptsChanges.psg";
 const pass1 = { keyPath: [path1], value: [String(sttNumber)] };
 tools.functions.setVar({ args: '', pass: pass1 });

	const style_1 = {
		flexDirection: "row",
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	};

	const style_2 = {
               backgroundColor: "#0064FE",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 3,
		width: 20,
		height: 20
	};
	
	const style_3 = {
		marginHorizontal: 20
	};

	const style_4 = {
		color: "#FFF",
		lineHeight: 0
	};

	return (
		<RN.View style={style_1}>
			<RN.Pressable style={style_2} onPress={() => setNumber(i => Math.max(0, i - 1))}>
				<RN.Text style={style_4}>-</RN.Text>
			</RN.Pressable>

			<RN.Text style={style_3}>{sttNumber}</RN.Text>

			<RN.Pressable style={style_2} onPress={() => setNumber(i => i + 1)}>
				<RN.Text style={style_4}>+</RN.Text>
			</RN.Pressable>
		</RN.View>
	);
}],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: "30px",
height: "30px",
borderRadius: "10px",
backgroundColor: "#FFF",
position: "absolute",
top: "170px",
right: "80px",
alignItems: "center",
justifyContent: "center",
opacity: "80%",
}`],

            functions:[()=>{}],            childrenItems:[() => {
	const [sttNumber, setNumber] = React.useState(0);

 const path1 = "sc.A0.forms.iptsChanges.inter";
 const pass1 = { keyPath: [path1], value: [String(sttNumber)] };
 tools.functions.setVar({ args: '', pass: pass1 });

	const style_1 = {
		flexDirection: "row",
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	};

	const style_2 = {
               backgroundColor: "#0064FE",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 3,
		width: 20,
		height: 20
	};
	
	const style_3 = {
		marginHorizontal: 20
	};

	const style_4 = {
		color: "#FFF",
		lineHeight: 0
	};

	return (
		<RN.View style={style_1}>
			<RN.Pressable style={style_2} onPress={() => setNumber(i => Math.max(0, i - 1))}>
				<RN.Text style={style_4}>-</RN.Text>
			</RN.Pressable>

			<RN.Text style={style_3}>{sttNumber}</RN.Text>

			<RN.Pressable style={style_2} onPress={() => setNumber(i => i + 1)}>
				<RN.Text style={style_4}>+</RN.Text>
			</RN.Pressable>
		</RN.View>
	);
}],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: "100%",
alignItems: "center",
padding: "20px",
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{width: "50px", borderWidth: "1px", borderColor: "#FFF", alignItems: "center",}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("tests");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{color: "#FFF",}`
          ],

          children: [
            `Teste`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
color: "#FFF",
position: "absolute",
top: "220px",
left: "40px",
alignItems: "center",
justifyContent: "center",
}`
          ],

          children: [
            `Nome do Jogador`
          ],

          args,

        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: "100%",
position: "absolute",
top: "240px",
alignItems: "center",
justifyContent: "center",
flexDirection: "row",
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [`{
width: "200px",
height: "30px",
borderRadius: "10px",
backgroundColor: "#FFF",
alignItems: "center",
justifyContent: "center",
opacity: "80%",
paddingHorizontal: "10px",
}`],

          path: [" "],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.A0.forms.iptsChanges.userName`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: "10px",
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: "60px",
padding: "5px",
borderWidth: "1px",
borderColor: "#FFF",
borderRadius: "15px",
alignItems: "center",
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.firebase.setDocTool({ args, pass:{
  arrRefStrings: [`championsScores`],
            arrPathData: [`sc.A0.forms.iptsChanges`],
            arrFuncs: [()=>{}],
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
color: "#FFF",
}`
          ],

          children: [
            `Salvar`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , (...args:any) => <Elements.ScrollBar pass={{
            styles: [`{
width: "95%",
height: "280px",
backgroundColor: "rgba(255,255,255,0.2)",
alignItems: "center",
borderRadius: "15px",
position: "absolute",
top: "280px",
}`],
            arrProps: [],
            arrItems: [
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: "5px",
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: "250px",
minHeight: 20,
flexDirection: "row",
backgroundColor: 'rgba(255,255,255,0.6)',
borderRadius: "15px",
alignItems: "center",
justifyContent: "center",
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
color: "#FFF",
}`
          ],

          children: [
            `PSG:`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
color: "#FFF",
}`
          ],

          children: [
            `$var_sc.A0.result.psg`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
color: "#FFF",
}`
          ],

          children: [
            `Vitórias`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
color: "#FFF",
}`
          ],

          children: [
            `Inter:`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
color: "#FFF",
}`
          ],

          children: [
            `$var_sc.A0.result.inter`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
color: "#FFF",
}`
          ],

          children: [
            `Vitórias`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
color: "#FFF",
}`
          ],

          children: [
            `Empate:`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
color: "#FFF",
}`
          ],

          children: [
            `$var_sc.A0.result.empate`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: "5px",
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: "250px",
flexDirection: "row",
backgroundColor: 'rgba(255,255,255,0.4)',
borderRadius: "15px",
alignItems: "center",
justifyContent: "center",
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
alignItems: "center",
justifyContent: "center",
paddingVertical: "5px",
backgroundColor: "transparent",
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
color: "#FFF",
}`
          ],

          children: [
            `Nome`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
alignItems: "center",
justifyContent: "center",
paddingVertical: "5px",
backgroundColor: "transparent",
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
color: "#FFF",
}`
          ],

          children: [
            `Placar`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , (...args:any) => <Elements.FlatList2 pass={{
          elementProperties: [
            ``
          ],

          pData: `sc.A0.lists.list1`,

          itemElements: [
            

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flexDirection: "row",
alignItems: "center",
justifyContent: "center",
backgroundColor:  "transparent",
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
alignItems: "center",
justifyContent: "center",
paddingVertical: "5px",
backgroundColor: "transparent",
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
color: "#CCC",
}`
          ],

          children: [
            `$arg_userName`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
alignItems: "center",
justifyContent: "center",
paddingVertical: "5px",
flexDirection: "row",
backgroundColor:  "transparent",
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
alignItems: "center",
justifyContent: "center",
paddingVertical: "5px",
backgroundColor: "transparent",
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
color: "#CCC",
}`
          ],

          children: [
            `$arg_psg`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: "10px",
alignItems: "center",
justifyContent: "center",
paddingVertical: "5px",
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
color: "#CCC",
}`
          ],

          children: [
            `X`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
alignItems: "center",
justifyContent: "center",
paddingVertical: "5px",
backgroundColor: "transparent",
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
color: "#CCC",
}`
          ],

          children: [
            `$arg_inter`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        
          ],

      styles:[`{
backgroundColor:  "transparent",
}`],    args,
        }}/>],
            args,
        }}/>],

            args,
          }}/>
        , 
        

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
position: "absolute",
width: "300px",
height: "100%",
zIndex: "-1px",
}],

      URIvariablePath:[`https://firebasestorage.googleapis.com/v0/b/flaxboll.appspot.com/o/lives_flaxboll%2Ffinal%201.png?alt=media&token=d5627ef4-6203-43c8-a13d-3ab594d986cd`],

      args,
    }}/>, 

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
position: "absolute",
width: "80px",
height: "80px",
zIndex: "1px",
}],

      URIvariablePath:[`https://firebasestorage.googleapis.com/v0/b/flaxboll.appspot.com/o/lives_flaxboll%2Fpsg.png?alt=media&token=d50aff75-48bd-40b6-95c2-609921da717b`],

      args,
    }}/>],

          functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.firebase.getDocsTool({ args, pass:{
   arrRefStrings: [`championsScores`],
            arrFuncs: [(args) => {
 console.log({ args });
 const path1 = 'sc.A0.lists.list1';
 const path2 = 'sc.A0.result';

  const vitorias = { psg: 0, inter: 0, empate: 0 };
args.forEach(p => {
  const psgGols = parseInt(p.psg);
  const interGols = parseInt(p.inter);

  if (psgGols > interGols) vitorias.psg++;
    else if (interGols > psgGols) vitorias.inter++;
    else vitorias.empate++;
});

 const pass1 = { keyPath: [path1], value: [args] };
 tools.functions.setVar({ args: '', pass: pass1 });

 const pass2 = { keyPath: [path2], value: [vitorias] };
 tools.functions.setVar({ args: '', pass: pass2 });
}],
        }})]
 , trigger: 'on init'
}})],

          args,
        }}/>, 

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"tests",

          styles:[
              {
                backgroundColor: '#101',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                width: '100%',
              }
              ],

          screenElements:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.firebase.getDocsTool({ args, pass:{
   arrRefStrings: [`championsScores`],
            arrFuncs: [(args) => {
 console.log({ args });
 const path1 = 'sc.A0.lists.list1';
 const path2 = 'sc.A0.result';

  const vitorias = { psg: 0, inter: 0, empate: 0 };
args.forEach(p => {
  const psgGols = parseInt(p.psg);
  const interGols = parseInt(p.inter);

  if (psgGols > interGols) vitorias.psg++;
    else if (interGols > psgGols) vitorias.inter++;
    else vitorias.empate++;
});

 const pass1 = { keyPath: [path1], value: [args] };
 tools.functions.setVar({ args: '', pass: pass1 });

 const pass2 = { keyPath: [path2], value: [vitorias] };
 tools.functions.setVar({ args: '', pass: pass2 });
}],
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `getCollection`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.firebase.setDocTool({ args, pass:{
  arrRefStrings: [`championsScores`],
            arrPathData: [`sc.A0.forms.iptsChanges`],
            arrFuncs: [()=>{}],
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `setDoc`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("home");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

          functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [()=>{}]
 , trigger: 'on init'
}})],

          args,
        }}/>
          ];

          const initCt = () => (
 {
 
        'all': { 
'colors': { 
'primary': "#fff", 'secondary': "#0064fe" } 
, 
'cond1': false, 
'func1': (nativeEvent)=>console.log(nativeEvent), 
'Comp1': <RN.Text style={{color: "darkred"}}>---</RN.Text>, 
'lists': { 
'lt1': [{name: "João", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{name: "Luciana"},{name: "Pedro"}], 
'lst2': [{name: "Tarefa 1", date: "21/03/25"},{name: "Tarefa 2", date: "21/03/25"},{name: "Tarefa 3", date: "24/03/25"}], 'lst3': [{name: "Task 1", check: false},{name: "Task 2", check: false}] } 
, 
'name': "Name:", 
'dataToSet': {name: "Carlos", phone: "1111"}, 
'toggles': { 
'box1': true, 'checkbox1': false } 
, 'firebaseConfig': {
  apiKey: "AIzaSyDjAfyEUADq7EaRyFWlGFjP1Eoox9LJHgI",
  authDomain: "devs-tests-95208.firebaseapp.com",
  projectId: "devs-tests-95208",
  storageBucket: "devs-tests-95208.appspot.com",
  messagingSenderId: "750912250366",
  appId: "1:750912250366:web:4629eac789a718a74220af"
} } 
, 'sc': { 'A0': { 'forms': { 'iptsChanges': { 
'psg': "", 
'inter': "", 'userName': "" } 
 } 
 } 
 } 
 
} 
 );
          const initObj = initCt();
          // console.log(initObj);

          const arrInitFuncs = [
            async (...args) =>
  functions.firebase.fireInit({ args, pass:{
   fbConfig: `all.firebaseConfig`,

        }})
          ];

          export const useRoutes = create(() => ({ currRoute }));
          export const useData = create(() => initObj);

          // ---------- set Main Component
          export const Router = () => {
            return (
              <Project
                configData={{
                  screens,
                  initCt,
                  arrInitFuncs,
                }}
              />
            );
          };
        
