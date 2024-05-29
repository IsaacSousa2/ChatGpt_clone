import { BsSun } from "react-icons/bs";

export const ChatPlaceholder = () => {

    return(

        <div className="pl-2 text-white">

            {/**/}
            <h3 className="text-4xl font-bold text-center my-8 ">E.D.I.T.H</h3>

            {/**/}
            <div className="flex flex-col md:flex-row gap-5 m-auto mb-8 md:max-w-4xl">

                {/**/}
                <div className="">
                    {/**/}
                    <div className="flex justify-center items-center text-lg mb-3">
                        <BsSun width={24} height={24} className="mr-3"/>
                        Clima...
                    </div>
                    {/**/}
                    <div className="bg-white/5 rounded text-sm text-center mb-3 p-3">
                        Explique o sentido da vida em termos simples
                    </div>
                    {/**/}
                    <div className="bg-white/5 rounded text-sm text-center mb-3 p-3">
                         Que dia será o enem?
                    </div>
                    {/**/}
                    <div className="bg-white/5 rounded text-sm text-center mb-3 p-3">
                        Que time vencerá e NBA nessa temporada?
                    </div>
                </div>
                {/**/}
                <div className="">
                    {/**/}
                    <div className="flex justify-center items-center text-lg mb-3">
                        <BsSun width={24} height={24} className="mr-3"/>
                        Organização...
                    </div>
                    {/**/}
                    <div className="bg-white/5 rounded text-sm text-center mb-3 p-3">
                        Crie uma rotina diária para mim, baseado em...
                    </div>
                    {/**/}
                    <div className="bg-white/5 rounded text-sm text-center mb-3 p-3">
                        Invente pra uma história para mim:
                    </div>
                    {/**/}
                    <div className="bg-white/5 rounded text-sm text-center mb-3 p-3">
                        Conte-me uma piada produtiva de jeito descontraído
                    </div>
                </div>
                {/**/}
                <div className="">
                    {/**/}
                    <div className="flex justify-center items-center text-lg mb-3">
                        <BsSun width={24} height={24} className="mr-3"/>
                        Aulas...
                    </div>
                    {/**/}
                    <div className="bg-white/5 rounded text-sm text-center mb-3 p-3">
                        Explique o sentido da vida em termos simples
                    </div>
                    {/**/}
                    <div className="bg-white/5 rounded text-sm text-center mb-3 p-3">
                        Explique o que são super condutores
                    </div>
                    {/**/}
                    <div className="bg-white/5 rounded text-sm text-center mb-3 p-3">
                        Qual é a melhor rotina de estudos para o enem
                    </div>
                    {/**/}
                </div>

            </div>
        </div>

    )

}