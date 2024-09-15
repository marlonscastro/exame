let questions = [
    {
        id: 101,
        type: "mc",
        text: "Você tem dois hosts Hyper-V chamados Host1 e Host2. Host1 possui uma máquina virtual Azure chamada VM1 que foi implantada usando um recurso Azure personalizado\
Modelo gerente.\
Você precisa mover VM1 para Host2.\
O que você deve fazer?",
        alternatives: [
            { description: "A: Na lâmina de gerenciamento de atualização, clique em Habilitar.", correct: false },
            { description: "B: Da lâmina Visão geral, mova a VM1 para uma assinatura diferente.", correct: false },
            { description: "C: A partir da lâmina Redeploy, clique em Redeploy.", correct: true },
            { description: "D: A partir da lâmina Perfil, modifique o local de uso.", correct: false }
        ]
    },
    {
        id: 102,
        type: "mc",
        text: "Você baixou um modelo do Azure Resource Manager para implantar inúmeras máquinas virtuais. O modelo é baseado em uma máquina virtual atual, mas deve ser adaptado para referenciar uma senha administrativa.\
Você precisa ter certeza de que a senha não está armazenada em texto simples.\
Você está se preparando para criar os componentes necessários para atingir seu objetivo.\
Qual das seguintes opções você deve criar para atingir seu objetivo? Responda arrastando a opção correta da lista para a área de resposta.\
Selecione e coloque: <img src=\"./examtopics_files/0000300001.jpg\"></img>",
        alternatives: [
            { description: "A. An Azure Storage Account and An Azure Policy", correct: false },
            { description: "B. A Backup Policy and An Azure Key Vault", correct: false },
            { description: "C. An Azure Key Vault and An Access Policy", correct: true },
            { description: "D: An Azure Storage Account and A Backup Policy", correct: false }
        ]
    },
    {
        id: 103,
        type: "mc",
        text: "Sua empresa possui um cluster do Azure Kubernetes Service (AKS) que você gerencia a partir de um dispositivo unido ao Azure AD. O cluster está localizado em um grupo de recursos.\
Os desenvolvedores criaram um aplicativo chamado MyApp. MyApp foi empacotado em uma imagem de contêiner.\
Você precisa implantar o arquivo de manifesto YAML para o aplicativo.\
Solução: Você instala a CLI do Azure no dispositivo e executa o comando <b><i>kubectl apply -f myapp.yaml.</i></b>\
<br>Isso atende ao objetivo?",
        alternatives: [
            { description: "A. Sim", correct: true },
            { description: "B. Não", correct: false }
        ]
    },
    {
        id: 104,
        type: "mc",
        text: "Sua empresa possui um cluster do Azure Kubernetes Service (AKS) que você gerencia a partir de um dispositivo unido ao Azure AD. O cluster está localizado em um grupo de recursos.\
Os desenvolvedores criaram um aplicativo chamado MyApp. MyApp foi empacotado em uma imagem de contêiner.\
Você precisa implantar o arquivo de manifesto YAML para o aplicativo.\
Solução: Você instala o cliente docker no dispositivo e executa o comando <b><i>docker run - it microsoft/azure-cli:0.10.17.</i></b>\
<br>Isso atende ao objetivo?",
        alternatives: [
            { description: "A. Sim", correct: false },
            { description: "B. Não", correct: true }
        ]
    },
    {
        id: 105,
        type: "mc",
        text: "Sua empresa possui um aplicativo web chamado WebApp1.\
Você usa o SDK do WebJobs para projetar uma tarefa em segundo plano do App Service acionada que invoca automaticamente uma função no código toda vez que novos dados são recebidos em uma fila.\
Você está se preparando para configurar os processos de serviço de um item de dados de fila.<br>\
Qual dos seguintes é o serviço que você deve usar?",
        alternatives: [
            { description: "A. Aplicativos Lógicos", correct: false },
            { description: "B. WebJobs", correct: true },
            { description: "C. Fluxo", correct: false },
            { description: "D. Funções", correct: false }
        ]
    },
    {
        id: 106,
        type: "mc",
        text: "Sua empresa tem uma assinatura do Azure.\
Você precisa implantar várias máquinas virtuais do Azure na assinatura usando modelos do Azure Resource Manager (ARM). As máquinas virtuais serão incluídas em um único conjunto de disponibilidade.\
Você precisa garantir que o modelo ARM permita que o maior número possível de máquinas virtuais permaneça acessível em caso de falha ou manutenção do tecido.\
<br>Qual das opções a seguir é o valor que você deve configurar para a propriedade <b>platformUpdateDomainCount?</b>",
        alternatives: [
            { description: "A. 10", correct: false },
            { description: "B. 30", correct: false },
            { description: "C. Valor Minimo", correct: false },
            { description: "D. Valor Máximo", correct: true }
        ]
    },
    {
        id: 107,
        type: "mc",
        text: "Sua empresa tem uma assinatura do Azure.\
Você precisa implantar várias máquinas virtuais do Azure na assinatura usando modelos do Azure Resource Manager (ARM). As máquinas virtuais serão incluídas em um único conjunto de disponibilidade.\
Você precisa garantir que o modelo ARM permita que o maior número possível de máquinas virtuais permaneça acessível em caso de falha ou manutenção do tecido.\
<br>Qual das opções a seguir é o valor que você deve configurar para a propriedade <b>platformUpdateDomainCount?</b>",
        alternatives: [
            { description: "A. 10", correct: false },
            { description: "B. 20", correct: true },
            { description: "C. 30", correct: false },
            { description: "D. 40", correct: false }
        ]
    },
    {
        id: 108,
        type: "mc",
        text: "Você está criando uma conta do Azure Cosmos DB que faz uso da API SQL. Os dados serão adicionados à conta todos os dias por um aplicativo da web.\
Você precisa garantir que uma notificação por e-mail seja enviada quando as informações forem recebidas de dispositivos IoT e que o custo de computação seja reduzido.\
Você decide implantar um aplicativo de função.\
Qual das seguintes opções você deve configurar o aplicativo de função a ser usado? Responda arrastando as opções corretas da lista para a área de resposta.\
Selecione e coloque: <img src=\"examtopics_files/0000900001.jpg\"></img>",
        alternatives: [
            { description: "A. Axure Event Hub and Azure Cosmos DB Conector", correct: false },
            { description: "B. Consumption Plan and SendGrid binding", correct: true },
            { description: "C. Consumption Plan and SendGrid action", correct: false },
            { description: "D. Azure Cosmos DB Conector and SendGrid action", correct: false }
        ]
    },
    {
        id: 109,
        type: "mc",
        text: "Esta questão requer que você avalie o texto sublinhado para determinar se ele está correto.\
        Sua empresa tem uma implantação local do MongoDB e uma conta do Azure Cosmos DB que faz uso da API do MongoDB.\
        Você precisa elaborar uma estratégia para migrar o MongoDB para a conta do Azure Cosmos DB.\
        Você inclui a ferramenta Data Management Gateway em sua estratégia de migração.\
        Instruções: Revise o texto sublinhado. Se ele tornar a declaração correta, selecione `Nenhuma alteração necessária`. Se a declaração estiver incorreta, selecione a opção de resposta que torna a declaração correta.",
        alternatives: [
            { description: "A. Nenhuma alteração necessária", correct: false },
            { description: "B. mongorestore", correct: true },
            { description: "C. Explorador de Armazenamento do Azure", correct: false },
            { description: "D. AzCópia", correct: false }
        ]
    },
    {
        id: 110,
        type: "mc",
        text: "Você está desenvolvendo um e-Commerce Web App.\
        Você quer usar o Azure Key Vault para garantir que os logins no e-Commerce Web App sejam protegidos usando a autenticação do Azure App Service e o Azure Active\
        Directory (AAD).\
        O que você deve fazer no e-Commerce Web App?",
        alternatives: [
            { description: "A. Execute o comando az keyvault secret.", correct: false },
            { description: "B. Habilite o Azure AD Connect.", correct: false },
            { description: "C. Habilite a Identidade de Serviço Gerenciado (MSI).", correct: true },
            { description: "D. Crie uma entidade de serviço do Azure AD.", correct: false }
        ]
    },
    {
        id: 111,
        type: "mc",
        text: "Esta questão requer que você avalie o texto sublinhado para determinar se ele está correto.\
        Seu locatário do Azure Active Directory Azure (Azure AD) tem uma assinatura do Azure vinculada a ele.\
        Seu desenvolvedor criou um aplicativo móvel que obtém tokens de acesso do Azure AD usando o tipo de concessão implícita OAuth 2.\
        O aplicativo móvel deve ser registrado no Azure AD.\
        Você precisa de um URI de redirecionamento do desenvolvedor para fins de registro.\
        Instruções: Revise o texto sublinhado. Se ele tornar a declaração correta, selecione `Nenhuma alteração é necessária.` Se a declaração estiver incorreta, selecione a opção de resposta que torna a declaração correta.",
        alternatives: [
            { description: "A. Nenhuma alteração necessária.", correct: true },
            { description: "B. um segredo (secret)", correct: false },
            { description: "C. uma dica de login.", correct: false },
            { description: "D. um ID de cliente (client_id)", correct: false }
        ]
    },
    {
        id: 114,
        type: "mc",
        text: "Você gerencia um banco de dados SQL do Azure que permite autenticação do Azure AD.\
        Você precisa ter certeza de que os desenvolvedores de banco de dados podem se conectar ao banco de dados SQL via Microsoft SQL Server Management Studio (SSMS). Você também precisa ter certeza de que os desenvolvedores usam suas contas do Active Directory local para autenticação. Sua estratégia deve permitir que os prompts de autenticação sejam mantidos no mínimo.\
        Qual dos seguintes você deve implementar?",
        alternatives: [
            { description: "A. Token do Azure AD.", correct: false },
            { description: "B. Autenticação multifator do Azure.", correct: false },
            { description: "C. Autenticação integrada do Active Directory.", correct: true },
            { description: "D. Tokens de software OATH.", correct: false }
        ]
    },
    {
        id: 115,
        type: "mc",
        text: "Você está desenvolvendo um aplicativo para transferir dados entre servidores de arquivos locais e o armazenamento de Blobs do Azure. O aplicativo armazena chaves, segredos e certificados no Azure Key Vault e faz uso das APIs do Azure Key Vault.\
        Você deseja configurar o aplicativo para permitir a recuperação de uma exclusão acidental do key vault ou de objetos do key vault por 90 dias após a exclusão.\
        O que você deve fazer?",
        alternatives: [
            { description: "A. Execute o cmdlet Add-AzKeyVaultKey.", correct: false },
            { description: "B. Execute a CLI az keyvault update --enable-soft-delete true --enable-purge-protection true.", correct: false },
            { description: "C. Implementar pontos de extremidade de serviço de rede virtual para o Azure Key Vault.", correct: true },
            { description: "D. Execute a CLI az keyvault update --enable-soft-delete false.", correct: false }
        ]
    },
    {
        id: 117,
        type: "mc",
        text: "Observação: a pergunta está incluída em várias perguntas que descrevem a configuração idêntica. No entanto, cada pergunta tem um resultado distinto. Estabeleça se a solução atende aos requisitos.\
        Você está configurando um aplicativo da Web que fornece streaming de vídeo aos usuários. O aplicativo faz uso de integração e implantação contínuas.\
        Você precisa garantir que o aplicativo esteja altamente disponível e que a experiência de streaming dos usuários seja constante. Você também deseja configurar o aplicativo para armazenar dados em um local geográfico mais próximo do usuário.\
        Solução: você inclui o uso do Azure Redis Cache em seu design.\
        A solução atende à meta?",
        alternatives: [
            { description: "A. Sim.", correct: false },
            { description: "B. Não.", correct: true },
        ]
    },
    {
        id: 118,
        type: "mc",
        text: "Observação: a pergunta está incluída em várias perguntas que descrevem a configuração idêntica. No entanto, cada pergunta tem um resultado distinto. Estabeleça se a solução atende aos requisitos.\
        Você está configurando um aplicativo da Web que fornece streaming de vídeo aos usuários. O aplicativo faz uso de integração e implantação contínuas.\
        Você precisa garantir que o aplicativo esteja altamente disponível e que a experiência de streaming dos usuários seja constante. Você também deseja configurar o aplicativo para armazenar dados em um local geográfico mais próximo do usuário.\
        Solução: você inclui o uso de uma Rede de Distribuição de Conteúdo (CDN) do Azure em seu design.\
        A solução atende à meta?",
        alternatives: [
            { description: "A. Sim.", correct: true },
            { description: "B. Não.", correct: false },
        ]
    },
    {
        id: 119,
        type: "mc",
        text: "Observação: a pergunta está incluída em várias perguntas que descrevem a configuração idêntica. No entanto, cada pergunta tem um resultado distinto. Estabeleça se a solução satisfaz os requisitos.\
        Você está configurando um aplicativo da Web que fornece streaming de vídeo aos usuários. O aplicativo faz uso de integração e implantação contínuas.\
        Você precisa garantir que o aplicativo esteja altamente disponível e que a experiência de streaming dos usuários seja constante. Você também deseja configurar o aplicativo para armazenar dados em uma localização geográfica mais próxima do usuário.\
        Solução: você inclui o uso de uma Storage Area Network (SAN) em seu design.\
        A solução atende à meta?",
        alternatives: [
            { description: "A. Sim.", correct: false },
            { description: "B. Não.", correct: true },
        ]
    },
    {
        id: 120,
        type: "mc",
        text: "Você desenvolve um Web App em um plano de serviço de aplicativo de nível D1.\
        Você percebe que os tempos de carregamento da página aumentam durante períodos de pico de tráfego.\
        Você quer implementar o dimensionamento automático quando a carga da CPU estiver acima de 80 por cento. Sua solução deve minimizar os custos.\
        O que você deve fazer primeiro?",
        alternatives: [
            { description: "A. Habilite o dimensionamento automático no aplicativo Web.", correct: false },
            { description: "B. Mude para o plano Premium App Service.", correct: false },
            { description: "C. Mude para o plano de nível Standard App Service.", correct: true },
            { description: "D. Mude para o plano de consumo dos Serviços de Aplicativo do Azure.", correct: false },
        ]
    },
    {
        id: 121,
        type: "mc",
        text: "A assinatura do Azure da sua empresa inclui um espaço de trabalho do Azure Log Analytics.\
        Sua empresa tem cem servidores locais que executam o Windows Server 2012 R2 ou o Windows Server 2016 e está vinculada ao espaço de trabalho do Azure Log Analytics. O espaço de trabalho do Azure Log Analytics é configurado para reunir contadores de desempenho associados à segurança desses servidores vinculados.\
        Você deve configurar alertas com base nas informações coletadas pelo espaço de trabalho do Azure Log Analytics.\
        Você precisa garantir que as regras de alerta permitam dimensões e que o tempo de criação do alerta seja mantido no mínimo. Além disso, uma única notificação de alerta deve ser criada quando o alerta for criado e quando o alerta for resolvido.\
        Você precisa usar o tipo de sinal necessário ao criar as regras de alerta.\
        Qual das seguintes opções você deve usar?",
        alternatives: [
            { description: "A. O tipo de sinal do log de atividades.", correct: false },
            { description: "B. O tipo de sinal do Log do aplicativo.", correct: false },
            { description: "C. O tipo de sinal métrico.", correct: true },
            { description: "D. O tipo de sinal do Log de Auditoria.", correct: false },
        ]
    },
    {
        id: 122,
        type: "mc",
        text: "Você está desenvolvendo um aplicativo .NET Core MVC que permite que os clientes pesquisem provedores independentes de acomodações de férias.\
        Você quer implementar o Azure Search para permitir que o aplicativo pesquise o índice usando vários critérios para localizar documentos relacionados à acomodação.\
        Você quer que o aplicativo permita que os clientes pesquisem o índice usando expressões regulares.\
        O que você deve fazer?",
        alternatives: [
            { description: "A. Configure a propriedade SearchMode da classe SearchParameters.", correct: false },
            { description: "B. Configure a propriedade QueryType da classe SearchParameters.", correct: true },
            { description: "C. Configure a propriedade Facets da classe SearchParameters.", correct: false },
            { description: "D. Configure a propriedade Filter da classe SearchParameters.", correct: false },
        ]
    },
    {
        id: 123,
        type: "mc",
        text: "Você é um desenvolvedor na sua empresa.\
        Você precisa atualizar as definições para um Logic App existente.<br>\
        O que você deve usar?",
        alternatives: [
            { description: "A. o Pacote de Integração Empresarial (EIP).", correct: false },
            { description: "B. a visualização do código do aplicativo lógico", correct: true },
            { description: "C. as conexões da API.", correct: false },
            { description: "D. o Designer de Aplicativos Lógicos", correct: false },
        ]
    },
    {
        id: 124,
        type: "mc",
        text: "Observação: a pergunta está incluída em várias perguntas que descrevem a configuração idêntica. No entanto, cada pergunta tem um resultado distinto. Estabeleça se a solução satisfaz os requisitos.\
        Você está desenvolvendo uma solução para uma API pública.\
        O back-end da API é hospedado em uma instância do Azure App Service. Você implementou um serviço RESTful para o back-end da API.\
        Você deve configurar a autenticação de back-end para a instância do serviço de gerenciamento de API.\
        Solução: você configura credenciais de gateway básicas para o recurso do Azure.<br>\
        A solução atende à meta?",
        alternatives: [
            { description: "A. Sim.", correct: false },
            { description: "B. Não.", correct: true },
        ]
    },
    {
        id: 125,
        type: "mc",
        text: "Observação: a pergunta está incluída em várias perguntas que descrevem a configuração idêntica. No entanto, cada pergunta tem um resultado distinto. Estabeleça se a solução atende aos requisitos.\
        Você está desenvolvendo uma solução para uma API pública.\
        O back-end da API é hospedado em uma instância do Azure App Service. Você implementou um serviço RESTful para o back-end da API.\
        Você deve configurar a autenticação de back-end para a instância do serviço de gerenciamento de API.\
        Solução: você configura as credenciais do gateway de certificado do cliente para o ponto de extremidade HTTP(s).\
        A solução atende à meta?",
        alternatives: [
            { description: "A. Sim.", correct: true },
            { description: "B. Não.", correct: false },
        ]
    },
    {
        id: 126,
        type: "mc",
        text: "Observação: a pergunta está incluída em várias perguntas que descrevem a configuração idêntica. No entanto, cada pergunta tem um resultado distinto. Estabeleça se a solução satisfaz os requisitos.\
        Você está desenvolvendo uma solução para uma API pública.\
        O back-end da API é hospedado em uma instância do Azure App Service. Você implementou um serviço RESTful para o back-end da API.\
        Você deve configurar a autenticação de back-end para a instância do serviço de gerenciamento de API.\
        Solução: você configura credenciais de gateway básicas para o ponto de extremidade HTTP(s).<br>\
        A solução atende à meta?",
        alternatives: [
            { description: "A. Sim.", correct: false },
            { description: "B. Não.", correct: true },
        ]
    },
    {
        id: 127,
        type: "mc",
        text: "Observação: a pergunta está incluída em várias perguntas que descrevem a configuração idêntica. No entanto, cada pergunta tem um resultado distinto. Estabeleça se a solução atende aos requisitos.\
        Você está desenvolvendo uma solução para uma API pública.\
        O back-end da API é hospedado em uma instância do Azure App Service. Você implementou um serviço RESTful para o back-end da API.\
        Você deve configurar a autenticação de back-end para a instância do serviço de gerenciamento de API.\
        Solução: você configura as credenciais do gateway de certificado do cliente para o recurso do Azure.\
        A solução atende à meta?",
        alternatives: [
            { description: "A. Sim.", correct: true },
            { description: "B. Não.", correct: false },
        ]
    },
    {
        id: 128,
        type: "mc",
        text: "Você está desenvolvendo um aplicativo .NET Core MVC que permite que os clientes pesquisem provedores independentes de acomodações de férias.\
        Você quer implementar o Azure Search para permitir que o aplicativo pesquise o índice usando vários critérios para localizar documentos relacionados a locais de acomodação.\
        Você quer que o aplicativo liste locais de acomodação de férias que se enquadrem em uma faixa de preço específica e estejam a uma distância especificada de um aeroporto.\
        O que você deve fazer?",
        alternatives: [
            { description: "A. Configure a propriedade SearchMode da classe SearchParameters.", correct: false },
            { description: "B. Configure a propriedade QueryType da classe SearchParameters.", correct: false },
            { description: "C. Configure a propriedade Facets da classe SearchParameters.", correct: false },
            { description: "D. Configure a propriedade Filter da classe SearchParameters.", correct: true },
        ]
    },
    {
        id: 129,
        type: "mc",
        text: "Você é um desenvolvedor na sua empresa.\
        Você precisa editar os fluxos de trabalho para um Logic App existente.\
        O que você deve usar?",
        alternatives: [
            { description: "A. o Pacote de Integração Empresarial (EIP)", correct: false },
            { description: "B. a visualização do código do aplicativo lógico", correct: false },
            { description: "C. as conexões da API", correct: false },
            { description: "D. o Designer de Aplicativos Lógicos", correct: true },
        ]
    },
    {
        id: 131,
        type: "mc",
        text: "Você está desenvolvendo um aplicativo que aplica um conjunto de políticas de governança para serviços internos e externos, bem como para aplicativos.\
        Você desenvolve um aplicativo Web ASP.NET Core 2.1 com estado chamado PolicyApp e o implanta em um Azure App Service Web App. O PolicyApp reage a eventos do\
        Azure Event Grid e executa ações de política com base nesses eventos.\
        Você tem os seguintes requisitos:<br>\
        ✑ Eventos de autenticação devem ser usados ​​para monitorar usuários quando eles entram e saem.<br>\
        ✑ Todos os eventos de autenticação devem ser processados ​​pelo PolicyApp.<br>\
        ✑ Os logouts devem ser processados ​​o mais rápido possível.<br><br>\
        O que você deve fazer?",
        alternatives: [
            { description: "A. Crie uma nova assinatura do Azure Event Grid para todos os eventos de autenticação. Use a assinatura para processar eventos de logout.", correct: false },
            { description: "B. Crie um manipulador separado do Azure Event Grid para eventos de entrada e saída.", correct: false },
            { description: "C. Crie tópicos e assinaturas separados do Azure Event Grid para eventos de entrada e saída.", correct: false },
            { description: "D. Adicione um prefixo de assunto para eventos de logout. Crie uma assinatura do Azure Event Grid. Configure a assinatura para usar o filtro subjectBeginsWith.", correct: true },
        ]
    },
    {
        id: 204,
        type: "mc",
        text: "Observação: esta pergunta faz parte de uma série de perguntas que apresentam o mesmo cenário. Cada pergunta da série contém uma solução exclusiva que pode atender aos objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\
        Depois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, essas perguntas não aparecerão na tela de revisão.\
        Você desenvolve uma oferta de software como serviço (SaaS) para gerenciar fotografias. Os usuários carregam fotos em um serviço da Web que as armazena no\
        armazenamento de Blobs do Azure Storage. O tipo de conta de armazenamento é V2 de uso geral.\
        Quando as fotos são carregadas, elas devem ser processadas para produzir e salvar uma versão da imagem compatível com dispositivos móveis. O processo para produzir uma versão da imagem compatível com dispositivos móveis deve começar em menos de um minuto.\
        Você precisa projetar o processo que inicia o processamento da foto.\
        Solução: acione o processamento da foto a partir de eventos de armazenamento de Blobs.\
        A solução atende ao objetivo?",
        alternatives: [
            { description: "A. Sim", correct: false },
            { description: "B. Não.", correct: true },
        ]
    },
    {
        id: 205,
        type: "mc",
        text: "Observação: esta pergunta faz parte de uma série de perguntas que apresentam o mesmo cenário. Cada pergunta da série contém uma solução exclusiva que pode atender aos objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\
        Depois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, essas perguntas não aparecerão na tela de revisão.\
        Você desenvolve e implanta um aplicativo da API do Serviço de Aplicativo do Azure em um slot de implantação hospedado no Windows chamado Desenvolvimento. Você cria slots de implantação adicionais chamados Teste e Produção. Você habilita a troca automática no slot de implantação Produção.\
        Você precisa garantir que os scripts sejam executados e os recursos estejam disponíveis antes que uma operação de troca ocorra.\
        Solução: atualize o arquivo web.config para incluir o elemento de configuração applicationInitialization. Especifique ações de inicialização personalizadas para executar os scripts.\
        A solução atende à meta?",
        alternatives: [
            { description: "A. Sim", correct: false },
            { description: "B. Não.", correct: true },
        ]
    },
    {
        id: 206,
        type: "mc",
        text: "Observação: esta pergunta faz parte de uma série de perguntas que apresentam o mesmo cenário. Cada pergunta da série contém uma solução exclusiva que pode atender aos objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\
        Depois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, essas perguntas não aparecerão na tela de revisão.\
        Você desenvolve e implanta um aplicativo da API do Serviço de Aplicativo do Azure em um slot de implantação hospedado no Windows chamado Desenvolvimento. Você cria slots de implantação adicionais chamados Teste e Produção. Você habilita a troca automática no slot de implantação Produção.\
        Você precisa garantir que os scripts sejam executados e os recursos estejam disponíveis antes que uma operação de troca ocorra.\
        Solução: habilite a troca automática para o slot Teste. Implante o aplicativo no slot Teste.\
        A solução atende à meta?",
        alternatives: [
            { description: "A. Sim", correct: false },
            { description: "B. Não.", correct: true },
        ]
    },
    {
        id: 207,
        type: "mc",
        text: "Observação: esta pergunta faz parte de uma série de perguntas que apresentam o mesmo cenário. Cada pergunta da série contém uma solução exclusiva que pode atender aos objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\
        Depois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, essas perguntas não aparecerão na tela de revisão.\
        Você desenvolve e implanta um aplicativo da API do Serviço de Aplicativo do Azure em um slot de implantação hospedado no Windows chamado Desenvolvimento. Você cria slots de implantação adicionais chamados Teste e Produção. Você habilita a troca automática no slot de implantação Produção.\
        Você precisa garantir que os scripts sejam executados e os recursos estejam disponíveis antes que uma operação de troca ocorra.\
        Solução: desabilite a troca automática. Atualize o aplicativo com um método chamado statuscheck para executar os scripts. Reative a troca automática e implante o aplicativo no slot Produção.\
        A solução atende à meta?",
        alternatives: [
            { description: "A. Sim", correct: false },
            { description: "B. Não.", correct: true },
        ]
    },
    {
        id: 208,
        type: "mc",
        text: "Observação: esta pergunta faz parte de uma série de perguntas que apresentam o mesmo cenário. Cada pergunta da série contém uma solução exclusiva que pode atender aos objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\
        Depois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, essas perguntas não aparecerão na tela de revisão.\
        Você desenvolve uma oferta de software como serviço (SaaS) para gerenciar fotografias. Os usuários carregam fotos em um serviço da Web que as armazena no\
        armazenamento de Blobs do Azure Storage. O tipo de conta de armazenamento é V2 de uso geral.\
        Quando as fotos são carregadas, elas devem ser processadas para produzir e salvar uma versão da imagem compatível com dispositivos móveis. O processo para produzir uma versão da imagem compatível com dispositivos móveis deve começar em menos de um minuto.\
        Você precisa projetar o processo que inicia o processamento de fotos.\
        Solução: converta a conta do Azure Storage em uma conta de armazenamento BlockBlobStorage.\
        A solução atende à meta?",
        alternatives: [
            { description: "A. Sim", correct: false },
            { description: "B. Não.", correct: true },
        ]
    },
    {
        id: 213,
        type: "mc",
        text: "Você desenvolve um site. Você planeja hospedar o site no Azure. Você espera que o site tenha altos volumes de tráfego após ser publicado.\
        Você deve garantir que o site permaneça disponível e responsivo, minimizando os custos.\
        Você precisa implantar o site.<br>\
        O que você deve fazer?",
        alternatives: [
            { description: "A. Implante o site em uma máquina virtual. Configure a máquina virtual para escalar automaticamente quando a carga da CPU estiver alta.", correct: false },
            { description: "B. Implante o site em um App Service que use o nível de serviço compartilhado. Configure o plano do App Service para dimensionar automaticamente quando a carga da CPU estiver alta.", correct: false },
            { description: "C. Implante o site em uma máquina virtual. Configure um Scale Set para aumentar a contagem de instâncias da máquina virtual quando a carga da CPU estiver alta..", correct: false },
            { description: "D. Implante o site em um App Service que use o nível de serviço Standard. Configure o plano do App Service para dimensionar automaticamente quando a carga da CPU estiver alta.", correct: true },
        ]
    },
    {
        id: 216,
        type: "mc",
        text: "Observação: esta pergunta faz parte de uma série de perguntas que apresentam o mesmo cenário. Cada pergunta da série contém uma solução exclusiva que pode atender aos objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\
        Depois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, essas perguntas não aparecerão na tela de revisão.\
        Você desenvolve um aplicativo Azure Function acionado por HTTP para processar dados de blob do Azure Storage. O aplicativo é acionado usando uma associação de saída no blob.\
        O aplicativo continua a expirar após quatro minutos. O aplicativo deve processar os dados do blob.\
        Você precisa garantir que o aplicativo não expire e processe os dados do blob.\
        Solução: use o padrão assíncrono Durable Function para processar os dados do blob.<br>\
        A solução atende à meta?",
        alternatives: [
            { description: "A. Sim", correct: true },
            { description: "B. Não.", correct: false },
        ]
    },
    {
        id: 217,
        type: "mc",
        text: "Observação: esta pergunta faz parte de uma série de perguntas que apresentam o mesmo cenário. Cada pergunta da série contém uma solução exclusiva que pode atender aos objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\
        Depois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, essas perguntas não aparecerão na tela de revisão.\
        Você desenvolve um aplicativo de função do Azure acionado por HTTP para processar dados de blob do Azure Storage. O aplicativo é acionado usando uma associação de saída no blob.\
        O aplicativo continua a expirar após quatro minutos. O aplicativo deve processar os dados do blob.\
        Você precisa garantir que o aplicativo não expire e processe os dados do blob.\
        Solução: <b>passe a carga útil do gatilho HTTP para uma fila do Azure Service Bus para ser processada por uma função de gatilho de fila e retorne uma resposta de sucesso HTTP imediata.</b>\
        A solução atende à meta?",
        alternatives: [
            { description: "A. Sim", correct: true },
            { description: "B. Não.", correct: false },
        ]
    },
    {
        id: 218,
        type: "mc",
        text: "Observação: esta pergunta faz parte de uma série de perguntas que apresentam o mesmo cenário. Cada pergunta da série contém uma solução exclusiva que pode atender aos objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\
        Depois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, essas perguntas não aparecerão na tela de revisão.\
        Você desenvolve um aplicativo de função do Azure acionado por HTTP para processar dados de blob do Azure Storage. O aplicativo é acionado usando uma associação de saída no blob.\
        O aplicativo continua a expirar após quatro minutos. O aplicativo deve processar os dados do blob.\
        Você precisa garantir que o aplicativo não expire e processe os dados do blob.\
        Solução: <b>configure o aplicativo para usar um plano de hospedagem do App Service e habilite a configuração Always On</b>.\
        A solução atende à meta?",
        alternatives: [
            { description: "A. Sim", correct: false },
            { description: "B. Não.", correct: true },
        ]
    },
    {
        id: 219,
        type: "mc",
        text: "Observação: esta pergunta faz parte de uma série de perguntas que apresentam o mesmo cenário. Cada pergunta da série contém uma solução exclusiva que pode atender aos objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\
        Depois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, essas perguntas não aparecerão na tela de revisão.\
        Você desenvolve uma oferta de software como serviço (SaaS) para gerenciar fotografias. Os usuários carregam fotos em um serviço da Web que as armazena no\
        armazenamento de Blobs do Azure Storage. O tipo de conta de armazenamento é V2 de uso geral.\
        Quando as fotos são carregadas, elas devem ser processadas para produzir e salvar uma versão da imagem compatível com dispositivos móveis. O processo para produzir uma versão da imagem compatível com dispositivos móveis deve começar em menos de um minuto.\
        Você precisa projetar o processo que inicia o processamento de fotos.\
        Solução: <b>mova o processamento de fotos para uma função do Azure acionada pelo upload de blobs.</b>\
        A solução atende à meta?",
        alternatives: [
            { description: "A. Sim", correct: true },
            { description: "B. Não.", correct: false },
        ]
    },
     {
        id: 220,
        type: "mc",
        text: "Você está desenvolvendo um aplicativo que usa o armazenamento de Blobs do Azure.\
        O aplicativo deve ler os logs de transações de todas as alterações que ocorrem nos blobs e os metadados do blob na conta de armazenamento para fins de auditoria. As alterações devem estar na ordem em que ocorreram, incluir apenas operações de criação, atualização, exclusão e cópia e ser retidas por motivos de conformidade.\
        Você precisa processar os logs de transações de forma assíncrona.<br>\
        O que você deve fazer?",
        alternatives: [
            { description: "A. Processe todos os eventos de armazenamento de Blobs do Azure usando o Azure Event Grid com um aplicativo de função do Azure assinante.", correct: false },
            { description: "B. Habilite o feed de alterações na conta de armazenamento e processe todas as alterações para eventos disponíveis.", correct: true },
            { description: "C. Processe todos os logs do Azure Storage Analytics para eventos de blob bem-sucedidos.", correct: false },
            { description: "D. Use a API do Coletor de Dados HTTP do Azure Monitor e verifique o corpo da solicitação em busca de eventos de blob bem-sucedidos.", correct: false },
        ]
    },
    {
        id: 222,
        type: "mc",
        text: "Você está desenvolvendo um Azure Function App que processa imagens que são carregadas em um contêiner Azure Blob.\
        As imagens devem ser processadas o mais rápido possível após serem carregadas, e a solução deve minimizar a latência. Você cria um código para processar imagens quando o\
        Function App é acionado.\
        Você precisa configurar o Function App.<br>\
        O que você deve fazer?",
        alternatives: [
            { description: "A. Use um plano do App Service. Configure o Function App para usar um gatilho de entrada do Azure Blob Storage.", correct: false },
            { description: "B. Use um plano de Consumo. Configure o Function App para usar um gatilho do Azure Blob Storage.", correct: false },
            { description: "C. Use um plano de Consumo. Configure o Function App para usar um gatilho Timer.", correct: false },
            { description: "D. Use um plano do App Service. Configure o Function App para usar um gatilho do Azure Blob Storage.", correct: true },
            { description: "E. Use um plano de Consumo. Configure o Function App para usar um gatilho de entrada do Azure Blob Storage.", correct: false },
        ]
    },
    {
        id: 232,
        type: "mc",
        text: "Observação: esta pergunta faz parte de uma série de perguntas que apresentam o mesmo cenário. Cada pergunta da série contém uma solução exclusiva que pode atender aos objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\
        Depois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, essas perguntas não aparecerão na tela de revisão.\
        Você desenvolve uma oferta de software como serviço (SaaS) para gerenciar fotografias. Os usuários carregam fotos em um serviço da Web que as armazena no\
        armazenamento de Blobs do Azure Storage. O tipo de conta de armazenamento é V2 de uso geral.\
        Quando as fotos são carregadas, elas devem ser processadas para produzir e salvar uma versão da imagem compatível com dispositivos móveis. O processo para produzir uma versão da imagem compatível com dispositivos móveis deve começar em menos de um minuto.\
        Você precisa projetar o processo que inicia o processamento de fotos.\
        <br>Solução: crie um aplicativo de função do Azure que use o modelo de hospedagem de consumo e que seja acionado a partir do upload do blob.</b><br>\
        A solução atende à meta?",
        alternatives: [
            { description: "A. Sim.", correct: false },
            { description: "B. Não.", correct: true },
        ]
    },
    {
        id: 233,
        type: "mc",
        text: "Observação: esta pergunta faz parte de uma série de perguntas que apresentam o mesmo cenário. Cada pergunta da série contém uma solução exclusiva que pode atender aos objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\
        Depois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, essas perguntas não aparecerão na tela de revisão.\
        Você desenvolve e implanta um aplicativo da API do Serviço de Aplicativo do Azure em um slot de implantação hospedado no Windows chamado Desenvolvimento. Você cria slots de implantação adicionais chamados Teste e Produção. Você habilita a troca automática no slot de implantação Produção.\
        Você precisa garantir que os scripts sejam executados e os recursos estejam disponíveis antes que uma operação de troca ocorra.\
        <br><b>Solução: atualize o aplicativo com um método chamado statuscheck para executar os scripts. Atualize as configurações do aplicativo para o aplicativo. Defina\
        WEBSITE_SWAP_WARMUP_PING_PATH e WEBSITE_SWAP_WARMUP_PING_STATUSES com um caminho para o novo método e códigos de resposta apropriados.</b><br>\
        A solução atende à meta?",
        alternatives: [
            { description: "A. Sim.", correct: true },
            { description: "B. Não.", correct: false },
        ]
    },
    {
        id: 238,
        type: "mc",
        text: "Observação: esta pergunta faz parte de uma série de perguntas que apresentam o mesmo cenário. Cada pergunta da série contém uma solução exclusiva que pode atender aos objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\
        Depois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, essas perguntas não aparecerão na tela de revisão.\
        Você desenvolve uma oferta de software como serviço (SaaS) para gerenciar fotografias. Os usuários carregam fotos em um serviço da Web que as armazena no\
        armazenamento de Blobs do Azure Storage. O tipo de conta de armazenamento é V2 de uso geral.\
        Quando as fotos são carregadas, elas devem ser processadas para produzir e salvar uma versão da imagem compatível com dispositivos móveis. O processo para produzir uma versão da imagem compatível com dispositivos móveis deve começar em menos de um minuto.\
        Você precisa projetar o processo que inicia o processamento de fotos.\
        <br><b>Solução: use o feed de alterações do Azure Blob Storage para acionar o processamento de fotos.</b><br>\
        A solução atende à meta?",
        alternatives: [
            { description: "A. Sim.", correct: false },
            { description: "B. Não.", correct: true },
        ]
    },
    {
        id: 239,
        type: "mc",
        text: "Você está desenvolvendo um aplicativo da Web que é executado como um Azure Web App. O aplicativo da Web armazena dados no Banco de Dados SQL do Azure e armazena arquivos em uma\
        conta do Azure Storage. O aplicativo da Web faz solicitações HTTP para serviços externos como parte das operações normais.\
        O aplicativo da Web é instrumentado com o Application Insights. Os serviços externos são compatíveis com OpenTelemetry.\
        Você precisa garantir que o ID do cliente do usuário conectado esteja associado a todas as operações em todo o sistema.<br><br>\
        O que você deve fazer?",
        alternatives: [
            { description: "A. Adicione o ID do cliente para o usuário conectado ao CorrelationContext no aplicativo da web.", correct: true },
            { description: "B. No SpanContext atual, defina o TraceId como o ID do cliente para o usuário conectado.", correct: false },
            { description: "C. Defina o cabeçalho Ocp-Apim-Trace como o ID do cliente para o usuário conectado", correct: false },
            { description: "D. Crie um novo SpanContext com o valor TraceFlags definido como o ID do cliente para o usuário conectado", correct: false },
        ]
    },
    {
        id: 242,
        type: "mc",
        text: "Observação: esta pergunta faz parte de uma série de perguntas que apresentam o mesmo cenário. Cada pergunta da série contém uma solução exclusiva que pode atender aos objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\
        Depois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, essas perguntas não aparecerão na tela de revisão.\
        Você desenvolve um aplicativo de função do Azure acionado por HTTP para processar dados de blob do Azure Storage. O aplicativo é acionado usando uma associação de saída no blob.\
        O aplicativo continua a expirar após quatro minutos. O aplicativo deve processar os dados do blob.\
        Você precisa garantir que o aplicativo não expire e processe os dados do blob.\
        <br><b>Solução: atualize a propriedade functionTimeout do arquivo de projeto host.json para 10 minutos.</b><br>\
        A solução atende à meta?",
        alternatives: [
            { description: "A. Sim.", correct: false },
            { description: "B. Não.", correct: true },
        ]
    },  
    {
        id: 246,
        type: "mc",
        text: "Você desenvolve Azure Durable Functions para gerenciar empréstimos de veículos.\
        O processo de empréstimo inclui várias ações que devem ser executadas em uma ordem especificada. Uma das ações inclui um processo de verificação de crédito do cliente, que pode exigir vários dias para ser processado.\
        Você precisa implementar Azure Durable Functions para o processo de empréstimo.\
        <br><b>Qual tipo de Azure Durable Functions você deve usar?</b>",
        alternatives: [
            { description: "A. Orquestrador.", correct: true },
            { description: "B. Cliente.", correct: false },
            { description: "C. Entidade.", correct: false },
            { description: "D. Atividade.", correct: false },
        ]
    },
    {
        id: 252,
        type: "mc",
        text: "Você está desenvolvendo vários microsserviços para execução no Azure Container Apps. O tráfego de entrada HTTP externo foi habilitado para os microsserviços.\
        Os microsserviços devem ser implantados na mesma rede virtual e gravar logs no mesmo espaço de trabalho do Log Analytics.\
        Você precisa implantar os microsserviços.\
        <br>O que você deve fazer?",
        alternatives: [
            { description: "A. Habilite o modo de revisão única.", correct: false },
            { description: "B. Use um ambiente separado para cada contêiner.", correct: false },
            { description: "C. Use uma imagem de registro de contêiner privada e uma única imagem para todos os contêineres.", correct: false },
            { description: "D. Use um único ambiente para todos os contêineres.", correct: true },
            { description: "E. Habilite o modo de revisão múltipla.", correct: false },
        ]
    },   
    {
        id: 257,
        type: "mc",
        text: "Você está desenvolvendo um aplicativo ASP.NET Core hospedado no Azure App Service.\
        O aplicativo requer que declarações personalizadas sejam retornadas do Microsoft Entra ID para autorização do usuário. As declarações devem ser removidas quando o registro do aplicativo for removido.\
        Você precisa incluir as declarações personalizadas no token de acesso do usuário.\
        <br>O que você deve fazer?",
        alternatives: [
            { description: "A. Exigir o escopo https://graph.microsoft.com/.default durante a autenticação.", correct: false },
            { description: "B. Configure o aplicativo para usar o fluxo de código de autorização OAuth 2.0.", correct: false },
            { description: "C. Implementar middleware personalizado para recuperar informações de função do Azure AD.", correct: false },
            { description: "D. Adicione os grupos ao atributo groupMembershipClaims no manifesto do aplicativo.", correct: false },
            { description: "E. Adicione as funções ao atributo appRoles no manifesto do aplicativo.", correct: true },
        ]
    },
    {
        id: 258,
        type: "mc",
        text: "Você está desenvolvendo um microsserviço para ser executado no Azure Container Apps para uma empresa. O tráfego de entrada HTTP externo foi habilitado.\
        A empresa exige que as atualizações do microsserviço não causem tempo de inatividade.\
        Você precisa implantar uma atualização nos microsserviços.\
        <br>O que você deve fazer?",
        alternatives: [
            { description: "A. Habilite o modo de revisão única.", correct: true },
            { description: "B. Use vários ambientes para cada contêiner.", correct: false },
            { description: "C. Use um registro de contêiner privado e uma única imagem para todos os contêineres.", correct: false },
            { description: "D. Use um único ambiente para todos os contêineres.", correct: false },
            { description: "E. Habilite o modo de revisão múltipla.", correct: false },
        ]
    },
    {
        id: 260,
        type: "mc",
        text: "Observação: esta pergunta faz parte de uma série de perguntas que apresentam o mesmo cenário. Cada pergunta da série contém uma solução exclusiva que pode atender aos objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\
        Depois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, essas perguntas não aparecerão na tela de revisão.\
        Você implanta um aplicativo Azure Container Apps e desabilita o ingresso no aplicativo de contêiner.\
        Os usuários relatam que não conseguem acessar o aplicativo de contêiner. Você investiga e observa que o aplicativo foi dimensionado para 0 instâncias.\
        Você precisa resolver o problema com o aplicativo de contêiner.\
        <br><b>Solução: habilite o ingress, crie uma regra de escala HTTP e aplique a regra ao aplicativo de contêiner.</b><br>\
        A solução atende ao objetivo?",
        alternatives: [
            { description: "A. Sim.", correct: false },
            { description: "B. Não.", correct: true },
        ]
    },
    {
        id: 261,
        type: "mc",
        text: "Observação: esta pergunta faz parte de uma série de perguntas que apresentam o mesmo cenário. Cada pergunta da série contém uma solução exclusiva que pode atender aos objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\
        Depois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, essas perguntas não aparecerão na tela de revisão.\
        Você implanta um aplicativo Azure Container Apps e desabilita o ingresso no aplicativo de contêiner.\
        Os usuários relatam que não conseguem acessar o aplicativo de contêiner. Você investiga e observa que o aplicativo foi dimensionado para 0 instâncias.\
        Você precisa resolver o problema com o aplicativo de contêiner.\
        <br><b>Solução: habilite o ingress, crie uma regra de dimensionamento personalizada e aplique a regra ao aplicativo de contêiner.</b><br>\
        A solução atende ao objetivo?",
        alternatives: [
            { description: "A. Sim.", correct: false },
            { description: "B. Não.", correct: true },
        ]
    },
    {
        id: 262,
        type: "mc",
        text: "Observação: esta pergunta faz parte de uma série de perguntas que apresentam o mesmo cenário. Cada pergunta da série contém uma solução exclusiva que pode atender às metas declaradas. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\
        Depois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, essas perguntas não aparecerão na tela de revisão.\
        Você implanta um aplicativo Azure Container Apps e desabilita a entrada no aplicativo de contêiner.\
        Os usuários relatam que não conseguem acessar o aplicativo de contêiner. Você investiga e observa que o aplicativo foi dimensionado para 0 instâncias.\
        Você precisa resolver o problema com o aplicativo de contêiner.\
        <br><b>Solução: habilite a entrada e configure as réplicas mínimas para 1 para o aplicativo de contêiner.</b><br>\
        A solução atende à meta?",
        alternatives: [
            { description: "A. Sim.", correct: true },
            { description: "B. Não.", correct: false },
        ]
    },
    {
        id: 302,
        type: "mc",
        text: "Você está criando um site que usa o armazenamento de Blobs do Azure para armazenamento de dados. Você configura o ciclo de vida do armazenamento de Blobs do Azure para mover todos os blobs para a camada de arquivamento após 30 dias.\
        Os clientes solicitaram um contrato de nível de serviço (SLA) para visualizar dados com mais de 30 dias.\
        Você precisa documentar o SLA mínimo para recuperação de dados.\
        Qual SLA você deve usar?",
        alternatives: [
            { description: "A. pelo menos dois dias.", correct: false },
            { description: "B. entre uma e 15 horas.", correct: true },
            { description: "C. pelo menos um dia.", correct: false },
            { description: "D. entre zero e 60 minutos.", correct: false },
        ]
    }, 
    {
        id: 307,
        type: "mc",
        text: "Observação: esta pergunta faz parte de uma série de perguntas que apresentam o mesmo cenário. Cada pergunta da série contém uma solução exclusiva que pode atender aos objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\
        Depois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, essas perguntas não aparecerão na tela de revisão.\
        Você está desenvolvendo uma solução do Azure para coletar dados de dispositivos de ponto de venda (POS) de 2.000 lojas localizadas em todo o mundo. Um único dispositivo pode produzir\
        2 megabytes (MB) de dados a cada 24 horas. Cada local de loja tem de um a cinco dispositivos que enviam dados.\
        Você deve armazenar os dados do dispositivo no armazenamento de Blobs do Azure. Os dados do dispositivo devem ser correlacionados com base em um identificador de dispositivo. Espera-se que lojas adicionais sejam abertas no futuro.\
        Você precisa implementar uma solução para receber os dados do dispositivo.\
        Solução: provisione uma Grade de Eventos do Azure. Configure o identificador da máquina como a chave de partição e habilite a captura.\
        <br>A solução atende à meta?",
        alternatives: [
            { description: "A. Sim.", correct: false },
            { description: "B. Não.", correct: true },
        ]
    },  
    {
        id: 308,
        type: "mc",
        text: "Você desenvolve soluções Azure.<br>\
        Um aplicativo .NET precisa receber uma mensagem toda vez que uma máquina virtual Azure termina de processar dados. As mensagens NÃO devem persistir após serem processadas pelo aplicativo receptor.\
        Você precisa implementar o objeto .NET que receberá as mensagens.<br>\
        Qual objeto você deve usar?",
        alternatives: [
            { description: "A. QueueClient.", correct: true },
            { description: "B. AssinaturaCliente.", correct: false },
            { description: "C. TópicoCliente.", correct: false },
            { description: "D. CloudQueueClient.", correct: false },
        ]
    }, 
    {
        id: 310,
        type: "mc",
        text: "Você desenvolve soluções Azure.<br>\
        Você deve se conectar a um banco de dados No-SQL distribuído globalmente usando a API .NET.\
        Você precisa criar um objeto para configurar e executar solicitações no banco de dados.\
        <br>Qual segmento de código você deve usar?",
        alternatives: [
            { description: "A. new Container(EndpointUri, PrimaryKey);", correct: false },
            { description: "B. new Banco de Dados(EndpointUri, PrimaryKey);", correct: false },
            { description: "C. new CosmosClient(EndpointUri, ChavePrimária);", correct: true },
        ]
    },               
    {
        id: 311,
        type: "mc",
        text: "Você tem uma conta de armazenamento do Azure existente que armazena grandes volumes de dados em vários contêineres.\
        Você precisa copiar todos os dados da conta de armazenamento existente para uma nova conta de armazenamento. O processo de cópia deve atender aos seguintes requisitos:<br>\
        ✑ Automatizar a movimentação de dados.<br>\
        ✑ Minimizar a entrada do usuário necessária para executar a operação.<br>\
        ✑ Garantir que o processo de movimentação de dados seja recuperável.<br>\
        O que você deve usar?",
        alternatives: [
            { description: "A. AzCopy", correct: true },
            { description: "B. Explorador de Armazenamento do Azure", correct: false },
            { description: "C. Portal do Azure", correct: false },
            { description: "D. Biblioteca de cliente de armazenamento.NET", correct: false },
        ]
    },   
    {
        id: 323,
        type: "mc",
        text: "Você desenvolve e implanta um aplicativo da Web no Azure App Service. O aplicativo acessa dados armazenados em uma conta do Azure Storage. A conta contém vários contêineres com vários blobs com grandes quantidades de dados. Você implanta todos os recursos do Azure em uma única região.\
        Você precisa mover a conta do Azure Storage para a nova região. Você deve copiar todos os dados para a nova região.\
        O que você deve fazer primeiro?",
        alternatives: [
            { description: "A. Exportar o modelo do Azure Resource Manager da conta de armazenamento do Azure", correct: true },
            { description: "B. Iniciar um failover de conta de armazenamento", correct: false },
            { description: "C. Configurar replicação de objetos para todos os blobs", correct: false },
            { description: "D. Use a ferramenta de linha de comando AzCopy", correct: false },
            { description: "E. Crie uma nova conta de armazenamento do Azure na região atual", correct: false },
        ]
    }, 
    {
        id: 327,
        type: "mc",
        text: "Uma organização implanta o Azure Cosmos DB.\
        Você precisa garantir que o índice seja atualizado conforme os itens são criados, atualizados ou excluídos.\
        <br>O que você deve fazer?",
        alternatives: [
            { description: "A. Defina o modo de indexação como Preguiçoso.", correct: false },
            { description: "B. Defina o valor da propriedade automática da política de indexação como Falso.", correct: false },
            { description: "C. Defina o valor da opção EnableScanInQuery como True.", correct: false },
            { description: "D. Defina o modo de indexação como Consistente.", correct: true },
        ]
    }, 
    {
        id: 338,
        type: "mc",
        text: "Você desenvolve soluções Azure.\
        Você deve se conectar a um banco de dados No-SQL distribuído globalmente usando a API .NET.\
        Você precisa criar um objeto para configurar e executar solicitações no banco de dados.\
        <br>Qual segmento de código você deve usar?",
        alternatives: [
            { description: "A. database_name = 'MeuBancoDeDados<br>\
            database = client.create_database_if_not_exists(id=database_name)", correct: false },
            { description: "B. cliente = CosmosClient(ponto final, chave)", correct: false },
            { description: "C. container_name = 'MyContainer'<br>\
            container = database.create_container_if_not_exists(<br>\
            id=container_name, partition_key=PartitionKey(path=\"/lastName\"), offer_throughput=400 )", correct: true },
        ]
    },            
]