import Link from "next/link";

const PrivacyPage = () => {
  return (
    <div className="container mx-auto p-4 max-w-2xl border my-4">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Política de Privacidade do Connect Caju
      </h1>
      <p className="text-sm mb-4">Última actualização: 20/10/2024</p>
      <p className="mb-4 text-justify">
        Bem-vindo à <span className="font-bold">Plataforma Connect Caju</span>.
      </p>
      <p className="mb-4 text-justify">
        Esta Política de Privacidade explica como colectamos, usamos, protegemos
        e gerenciamos suas informações pessoais.
      </p>
      <div className="text-justify py-4 space-y-4">
        <h2 className="font-bold text-lg">1. Informações que colectamos</h2>
        <div>
          Colectamos as seguintes informações pessoais:
          <div>
            <ol className="list-decimal ml-4">
              <li className="mb-2 ml-2">Nome completo</li>
              <li className="mb-2 ml-2">Número de telefone</li>
              <li className="mb-2 ml-2">Endereço de e-mail</li>
              <li className="mb-2 ml-2">Província e distrito de residência</li>
            </ol>
          </div>
        </div>
        <h2 className="font-bold text-lg">2. Como usamos suas informações</h2>
        <div>
          Utilizamos suas informações para:
          <div>
            <ol className="list-decimal ml-4">
              <li className="mb-2 ml-2">Identificar usuários por província e distrito de residência</li>
              <li className="mb-2 ml-2">
                Implementar autorizações a funcionalidades de acordo com a
                província e distrito de residência e função que exerce no
                Instituto de Amêndoas de Moçambique
              </li>
            </ol>
          </div>
        </div>
        <h2 className="font-bold text-lg">3. Compartilhamento de dados</h2>
        <div>
          O Connect Caju não compartilha dados dos usuários com terceiros.
        </div>
        <h2 className="font-bold text-lg">
          4. Seus direitos e controle sobre seus dados
        </h2>
        <div>
          Você tem o direito de:
          <div>
            <ol className="list-decimal ml-4">
              <li className="mb-2 ml-2">Acessar seus dados pessoais</li>
              <li className="mb-2 ml-2">
                Corrigir ou actualizar suas informações
              </li>
              <li className="mb-2 ml-2">
                Requerer a exclusão de seus dados pessoais
              </li>
              <li className="mb-2 ml-2">
                Solicitar a limitação de uso de dados para finalidades
                específicas
              </li>
            </ol>
          </div>
        </div>
        <h2 className="font-bold text-lg">5. Limitação de acesso a dados</h2>
        <div>
          <ol className="list-decimal ml-4">
            <li className="mb-2 ml-2">Limitação de acesso a dados apenas para pessoas autorizadas</li>
            <li className="mb-2 ml-2">Solicitação de consentimento explícito para colecta e uso de dados</li>
            <li className="mb-2 ml-2">Acesso ao aplicativo protegido por login com e-mail e senha</li>
          </ol>
        </div>
        <h2 className="font-bold text-lg">6. Uso de cookies</h2>
        <div>
          O aplicativo móvel Connect Caju não utiliza cookies ou tecnologias
          similares de rastreamento.
        </div>
        <h2 className="font-bold text-lg">7. Área de Operação</h2>
        <div>
          O aplicativo móvel Connect Caju foi desenvolvido para uso exclusivo em
          Moçambique.
        </div>
        <h2 className="font-bold text-lg">8. Público-Alvo</h2>
        <div>
          O aplicativo móvel Connect Caju é destinado aos trabalhadores do Instituto de Amêndoas
          de Moçambique que prestam assistência técnica aos produtores de caju e
          participam nas actividades de monitoria de comercialização da castanha
          de caju em Moçambique.
        </div>
        <h2 className="font-bold text-lg">9. Alterações nesta Política</h2>
        <div>
          Podemos actualizar esta política periodicamente. Recomendamos que você
          revise esta página regularmente para se manter informado sobre
          quaisquer mudanças.
        </div>
        <h2 className="font-bold text-lg">10. Contacto</h2>
        <div>
          Para dúvidas ou sugestões sobre esta política, entre em contacto conosco
          pelo e-mail:{" "}
          <Link href="mailto:connectcaju@iam.gov.mz" className="underline">
            connectcaju@iam.gov.mz
          </Link>{" "}
          &nbsp;ou pelo telefone:{" "}
          <Link href="tel:+258840445375" className="underline">
            +258 84 044 5375
          </Link>.
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
