// Tema 14

//For next imports
import Head from 'next/head'
import Image from 'next/image'

//For katex imports
import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next';

//Own imports
import Layout  from '../components/layout';
import styles from './tema14.module.css';


//Vars, functions and consts
//Vars, functions and consts
function laT(text) {
    return `$${text}$`
}
function LaT(text) {
    return `$$${text}$$`
}


let expr1 = "$ U $" // Example
let expr2 = "$ V $"
let expr3 = "$ \\mathbb{K} $"
let expr4 = "$L(U,V)=\\begin{Bmatrix} T: U \\rightarrow V : T  \\text{ es transformacion lineal}\\end{Bmatrix}  $"
let expr5 = "$  T: \\mathbb{R}^{2} \\rightarrow \\mathbb{R}^{2} $"
let expr6 = "$ T \\in  L(U)$"
let expr7 = "$ u \\in U$"
let expr8 = "$ \\exists  \\lambda  \\in  \\mathbb{K} $"
let expr9 = "$ T(u)= \\lambda  u V $"
let expr10 = "$ Id : U \\rightarrow U $"
let expr11 = "$ Id(u)=u $"




let expr12 = "$ T \\in  \\mathscr{L}(V)$"
let expr13 = "$ U \\subset V$"
let expr14 = "$ T $"
let expr15 = "$ U $"
let expr16 = "$ T (U) \\subset U $"
let expr17 = "$ T_{|U}$"
let expr18 = "$ \\mathscr{L}(U)$"
let expr19 = "$ \\begin{Bmatrix} 0  \\end{Bmatrix}$"
let expr20 = "$\\neq $"
let expr21 = "$ U \\doteq \\begin{bmatrix} u \\end{bmatrix} \\subset  V$"
let expr22 = "$ \\alpha  \\in \\mathbb{R}$"
let expr23 = "$ T(\\alpha u ) \\in  \\left [  u \\right ] $"
let expr24 = "$ \\beta \\in \\mathbb{R}$"
let expr25 = "$ T\\left ( \\alpha u \\right )= \\beta u$"
let expr26 = "$\\alpha \\neq 0$"
let expr27 = "$\\beta \\text{ tal que } T \\left ( u \\right )= \\left ( \\beta /\\alpha \\right )u$"
let expr28 = "$u\\neq 0$"
let expr29 = "$T \\in  \\mathscr{L}(U)$"
let expr30 = "$$"
let expr31 = "$$"



const tema14 = () => {
    return (
        <Layout>
            <Head>
                <title>Hypatia - Tema 14</title>
            </Head>
            <div className="container px-8 mx-auto m-6 rounded-md shadow-xl bg-white">

                {/* AQUI VA SU //in CONTENIDO */}


                <h1 className={`pb-4 `+ styles.mainTitle}>Autovalores y autovectores</h1>
                

                <div className={`flex flex-row `}>
                    <Image 
                        src="/definition_icon.png"
                        alt="Definicion"
                        width={60}
                        height={60}
                    />
                    <h3 className={`mt-4 pb-4 `+ styles.defTitle}>Definición de autovalores y autovectores:</h3>
                </div>


                <p className={`leading-relaxed `+styles.parrafo}>
                Considere un operador lineal  <Latex>{ expr12}</Latex>  y un subespacio <Latex>{ expr13}</Latex> . Si
                la imagen de <Latex>{expr15}</Latex> por <Latex>{expr14}</Latex> es un subconjunto
                (en realidad es un subespacio vector) de <Latex>{expr15}</Latex>decimos que <Latex>{expr15}</Latex>
                 es un subespacio invariante por <Latex>{expr14}</Latex>, es decir,
                 <Latex>{expr16}</Latex>. Por lo tanto, la restricción de <Latex>{expr14}</Latex> al subespacio <Latex>{expr15}</Latex>, denotado por
                 <Latex>{expr17}</Latex>, pertenece a <Latex>{expr18}</Latex>. Como veremos en el próximo capítulo, esto hará que sea más fácil
                a menudo la comprensión de cómo actúa un operador lineal, ya que sin
                duda, es más sencillo estudiarlo en subespacios de menores dimensiones.

                </p>


                <p className={`leading-relaxed `+styles.parrafo}>
                
                Es obvio que los subespacios <Latex>{expr19}</Latex> y<Latex>{expr2}</Latex> son invariantes por cualquier <Latex>{expr12}</Latex>. Veamos qué debe suceder para que exista un subespacio.
                invariante de la dimensión uno. Obviamente, necesitamos <Latex>{expr2}</Latex> <Latex>{expr20}</Latex> <Latex>{expr19}</Latex>. Igual que
                cada subespacio de dimensión uno es generado por un vector distinto de cero, vemos
                que <Latex>{expr21}</Latex>,   <Latex>{expr28}</Latex>  e invariante por <Latex>{expr14}</Latex> si y solo si para todo <Latex>{expr22}</Latex>
               
                tenemos <Latex>{expr23}</Latex>, es decir, si hay <Latex>{expr24}</Latex> tal que <Latex>{expr25}</Latex>, que
                para <Latex>{expr26}</Latex> y equivalente a  existente<Latex>{expr27}</Latex>, para algun
                <Latex>{expr28}</Latex>. Esto sugiere la siguiente definición:
                </p>

                <div className={`flex flex-row `}>
                    <Image 
                        src="/definition_icon.png"
                        alt="Definicion"
                        width={60}
                        height={60}
                    />
                    <h3 className={`mt-4 pb-4 `+ styles.defTitle}>Definición 1 :</h3>
                </div>


                <p className={`leading-relaxed `+styles.parrafo}>
                
                Sea <Latex>{expr15}</Latex> un espacio vectorial y <Latex>{expr29}</Latex>. 
                
                
                Decimos que un vector <Latex>{laT('u \\in U')}</Latex> distinto de cero es un vector propio de<Latex>{laT('T')}</Latex> si hay <Latex>{laT('\\lambda \\in \\mathbb{R}')}</Latex> tal que
                <Latex>{laT('T\\left ( u \\right )= \\lambda u')}</Latex>.

                 <div className={`flex flex-row `}>
                    <Image 
                        src="/observacion_icon.png"
                        alt="Observacion"
                        width={60}
                        height={60}
                    />
                    <h3 className={`mt-4 pb-4 leading-relaxed `+ styles.defTitle}>Observación 1:</h3>
                </div>
                
                Si <Latex>{laT('u\\neq 0')}</Latex> y tal que <Latex>{laT('T\\left ( u \\right )= \\lambda u= \\mu u')}</Latex> entonces <Latex>{laT('\\lambda = \\mu ')}</Latex>. En
                De hecho, esta igualdad implica que <Latex>{laT('\\left ( \\lambda -\\mu  \\right )u= 0')}</Latex>, es decir,<Latex>{laT('\\lambda -\\mu = 0')}</Latex> .


                <div className={`flex flex-row `}>
                    <Image 
                        src="/definition_icon.png"
                        alt="Definicion"
                        width={60}
                        height={60}
                    />
                    <h3 className={`mt-4 pb-4 `+ styles.defTitle}>Definición 2 :</h3>
                </div>

                



                Sea <Latex>{laT('U')}</Latex> un espacio vectorial, <Latex>{laT('T \\in \\mathscr{L}\\left ( U \\right )')}</Latex> y <Latex>{laT('u')}</Latex> un autovector de <Latex>{laT('T')}</Latex>. 
                El número <Latex>{laT('\\lambda')}</Latex> tal que <Latex>{laT('T\\left ( u \\right )= \\lambda u')}</Latex>se llama el autovalor de
                <Latex>{laT('T')}</Latex>T asociado con el vector propio <Latex>{laT('u')}</Latex>.


                <div className={`flex flex-row `}>
                    <Image 
                        src="/definition_icon.png"
                        alt="Definicion"
                        width={60}
                        height={60}
                    />
                    <h3 className={`mt-4 pb-4 `+ styles.defTitle}>Definición 3 :</h3>
                </div>


                Sea <Latex>{laT('U')}</Latex> un espacio vectorial, <Latex>{laT('T \\in \\mathscr{L} \\left ( U \\right )')}</Latex> y <Latex>{laT('\\lambda')}</Latex> un autovalor de <Latex>{laT('T')}</Latex>. Sea <Latex>{laT('I:U\\rightarrow U')}</Latex> la identidad. El subespacio vectorial
                <Latex>{LaT('V\\left ( \\lambda  \\right )=\\left \\{  u \\in U; T\\left ( u \\right )= \\lambda u\\right \\}=  \\mathscr{N} \\left ( T- \\lambda I \\right )')}</Latex>
                </p>


                

                Se llama el subespacio propio del valor propio <Latex>{laT('\\lambda')}</Latex>, o el espacio propio 
                asociado con <Latex>{laT('\\lambda')}</Latex>. Si <Latex>{laT('U')}</Latex> tiene una dimensión nita, diremos que la dimensión de
                <Latex>{laT('V(\\lambda)')}</Latex> es la multiplicidad geométrica de <Latex>{laT('\\lambda')}</Latex>.
                
                <div className={`flex flex-row `}>
                    <Image 
                        src="/observacion_icon.png"
                        alt="Observacion"
                        width={60}
                        height={60}
                    />
                    <h3 className={`mt-4 pb-4 leading-relaxed `+ styles.defTitle}>Observación 2:</h3>
                </div>

                Observación 9.5 Tenga en cuenta que todo <Latex>{laT('u \\in V\\left ( \\lambda  \\right )')}</Latex>,<Latex>{laT('u\\neq 0')}</Latex>, y un vector propio de T
                asociado con el valor propio <Latex>{laT('\\lambda')}</Latex>.

                <div className={`flex flex-row `}>
                    <Image 
                        src="/observacion_icon.png"
                        alt="Observacion"
                        width={60}
                        height={60}
                    />
                    <h3 className={`mt-4 pb-4 leading-relaxed `+ styles.defTitle}>Observación 3:</h3>
                </div>
                
                
                Observación 9.6 <Latex>{laT('V\\left ( \\lambda  \\right )')}</Latex> es un subespacio invariante por <Latex>{laT('T')}</Latex>, es decir,
                
                <Latex>{LaT('T\\left ( V\\left ( \\lambda  \\right ) \\right )\\subset V\\left ( \\lambda  \\right )')}</Latex>
                
                Solo tenga en cuenta que si <Latex>{laT('u \\in V\\left ( \\lambda  \\right )')}</Latex> entonces <Latex>{laT('T\\left ( u \\right )= \\lambda u \\in V\\left ( \\lambda  \\right )')}</Latex>.
                
                








                


                <div className={`flex flex-row `}>
                    <Image 
                        src="/definition_icon.png"
                        alt="Definicion"
                        width={60}
                        height={60}
                    />
                    <h3 className={`mt-4 pb-4 `+ styles.defTitle}>Definición:</h3>
                </div>

                <p className={`leading-relaxed ` + styles.parrafo}>
                    <Latex>Sean $U$ y $V$ dos espacios vectoriales sobre</Latex> <Latex>{expr3}</Latex> y <Latex>{expr6}</Latex>
                Decimos que un vector no nulo <Latex>{expr7}</Latex> es un autovector de T si <Latex>{expr8}</Latex> tal que <Latex>{expr9}</Latex>
                </p>

                <div className={`flex flex-row `}>
                    <Image 
                        src="/ejercicio_icon.png"
                        alt="Definicion"
                        width={60}
                        height={60}
                    />
                    <h3 className={`mt-4 pb-4 leading-relaxed `+ styles.defTitle}>Ejemplo </h3>
                </div>

                <p className={`leading-relaxed ` + styles.parrafo}>
                    La transformación identidad <Latex>{expr10}</Latex> definida por <Latex>{expr11}</Latex> tiene 
                    como autovector (vector propio) a cualesquiera vector no nulo <Latex>{expr7}</Latex> puesto que 
                    <Latex>{expr10}</Latex>

                  
                    


                </p>

                <p className={`leading-relaxed ` + styles.parrafo}>

                <iframe scrolling="no" title="Autovalores y autovectores. " src="https://www.geogebra.org/material/iframe/id/yb9ts3kg/width/1000/height/500/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/true/rc/false/ld/false/sdz/true/ctl/false" width="900px" height="400px"> </iframe>
                </p>


                <p className={`leading-relaxed ` + styles.parrafo}>

                En esta simulación se pretende que se visualicen geométricamente los autovalores y autovectores de una matriz A. Para ello, se supone que A es la matriz asociada en la base canónica a una transformación lineal 
                </p>
                <p className={`leading-relaxed ` + styles.parrafo}>
                <Latex>{expr5}</Latex>.
                </p>
                <p className={`leading-relaxed ` + styles.parrafo}>
                 Entonces los autovectores (<Latex>{expr2}</Latex>) son aquellas direcciones tales que T(<Latex>{expr2}</Latex>)=c * <Latex>{expr2}</Latex>(c constante).
                 </p>
                 <p className={`leading-relaxed ` + styles.parrafo}>
                Es decir las que se mantienen invariantes. 
                Para ello se anima un vector unitario que recorre todo el círculo unidad, a la vez que su transformado. Entonces, cuando un vector V y su transformado coincidan en la misma "dirección", ese vector es un autovector. 
                </p>
                <p className={`leading-relaxed ` + styles.parrafo}>
                <h2 className={styles.importante} >NOTA:</h2> 
                La matriz A puede cambiarse ingresando sus coeficientes en las casillas de control. Luego Actualizar Vistas.
                </p>

            </div>
        </Layout>        
    );
}

export default tema14;