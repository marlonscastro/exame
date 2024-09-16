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
    {
        id: 344,
        type: "mc",
        text: "Você está desenvolvendo uma solução de rastreamento de inventário. A solução inclui um aplicativo Azure Function contendo várias funções acionadas pelo Azure Cosmos DB. Você planeja implantar a solução em várias regiões do Azure.\
<br><br>\
        A solução deve atender aos seguintes requisitos:<br>\
        <br>\
        • Os resultados do item do Azure Cosmos DS devem retornar a versão mais recente confirmada de um item.<br>\
        • Os itens gravados no Azure Cosmos DB devem fornecer garantias de ordenação.<br>\
        <br><br>\
        Você precisa configurar o nível de consistência para as implantações do Azure Cosmos DB.<br>\
        <br><br>\
        Qual nível de consistência você deve usar?",
        alternatives: [
            { description: "A. prefixo consistente", correct: false },
            { description: "B. eventual", correct: false },
            { description: "C. obsolescência limitada", correct: false },
            { description: "D. forte", correct: true },
            { description: "E. sessão", correct: false },
        ]
    },   
    {
        id: 347,
        type: "mc",
        text: "Você cria e publica um novo aplicativo Web do Azure App Service.\
        A autenticação e autorização do usuário devem usar o Azure Active Directory (Azure AD).\
        Você precisa configurar a autenticação e a autorização.<br><br>\
        O que você deve fazer primeiro?",
        alternatives: [
            { description: "A. Adicione um provedor de identidade.", correct: true },
            { description: "B. Mapeie um nome DNS personalizado existente.", correct: false },
            { description: "C. Crie e configure uma nova configuração de aplicativo.", correct: false },
            { description: "D. Adicione um certificado privado.", correct: false },
            { description: "E. Crie e configure uma identidade gerenciada.", correct: false },
        ]
    },
    {
        id: 349,
        type: "mc",
        text: "Você tem um aplicativo de console baseado em contêiner Linux que carrega arquivos de imagem de sites de clientes em todo o mundo. Um sistema de back-end que é executado em máquinas virtuais do Azure processa as imagens usando a API do Azure Blobs.\
        Você não tem permissão para fazer alterações no aplicativo.\
        Alguns sites de clientes têm apenas conexões de internet baseadas em telefone.\
        Você precisa configurar o aplicativo de console para acessar as imagens.<br><br>\
        O que você deve usar?",
        alternatives: [
            { description: "A. Azure BlobFuse", correct: true },
            { description: "B. Discos Azure", correct: false },
            { description: "C. Suporte ao Azure Storage Network File System (NFS) 3.0", correct: false },
            { description: "D. Arquivos do Azure", correct: false },
        ]
    },
    {
        id: 353,
        type: "mc",
        text: "Você cria um banco de dados Azure Cosmos DB para NoSQL.\
        Você planeja usar a API do Azure Cosmos DB .NET SDK v3 para NoSQL para carregar os seguintes arquivos:<br>\
        <img src=\"https://img.examtopics.com/az-204/image508.png\"></img><br>\
        Você recebe a seguinte mensagem de erro ao carregar os arquivos: “<b>413 Entity too large</b>.\
        Você precisa determinar quais arquivos você pode carregar no banco de dados Azure Cosmos DB para NoSQL.<br>\
        Quais arquivos você pode carregar?",
        alternatives: [
            { description: "A. Arquivo1, Arquivo2, Arquivo3, Arquivo4 e Arquivo5", correct: false },
            { description: "B. Somente Arquivo1 e Arquivo2", correct: true },
            { description: "C. Somente Arquivo1, Arquivo2 e Arquivo3", correct: false },
            { description: "D. Somente Arquivo1, Arquivo2, Arquivo3 e Arquivo4", correct: false },
            { description: "E. Somente arquivo 1", correct: false },
        ]
    }, 
    {
        id: 401,
        type: "mc",
        text: "Você está desenvolvendo um aplicativo Java que usa o Cassandra para armazenar dados de chave e valor. Você planeja usar um novo recurso do Azure Cosmos DB e a\
        API do Cassandra no aplicativo. Você cria um grupo do Azure Active Directory (Azure AD) chamado Cosmos DB Creators para habilitar o provisionamento de contas, bancos de dados e contêineres do Azure Cosmos.\
        O grupo do Azure AD não deve conseguir acessar as chaves necessárias para acessar os dados.\
        Você precisa restringir o acesso ao grupo do Azure AD.<br><br>\
        Qual controle de acesso baseado em função você deve usar?",
        alternatives: [
            { description: "A. DocumentDB Accounts Contributor", correct: false },
            { description: "B. Cosmos Backup Operator", correct: false },
            { description: "C. Cosmos DB Operator", correct: true },
            { description: "D. Cosmos DB Account Reader", correct: false },
        ]
    },     
    {
        id: 402,
        type: "mc",
        text: "Observação: esta pergunta faz parte de uma série de perguntas que apresentam o mesmo cenário. Cada pergunta da série contém uma solução exclusiva que pode atender aos objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\
        Depois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, essas perguntas não aparecerão na tela de revisão.\
        Você está desenvolvendo um site que será executado como um Azure Web App. Os usuários serão autenticados usando suas credenciais do Azure Active Directory (Azure AD).\
        Você planeja atribuir aos usuários um dos seguintes níveis de permissão para o site: administrador, normal e leitor. A associação ao grupo do Azure AD de um usuário deve ser usada para determinar o nível de permissão.\
        Você precisa configurar a autorização.<br>\
        <b>Solução: configure o Azure Web App para o site para permitir apenas solicitações autenticadas e exigir logon do Azure AD.</b><br><br>\
        A solução atende ao objetivo?",
        alternatives: [
            { description: "A. Sim", correct: false },
            { description: "B. Não", correct: true },
        ]
    },                   
    {
        id: 403,
        type: "mc",
        text: "Observação: esta pergunta faz parte de uma série de perguntas que apresentam o mesmo cenário. Cada pergunta da série contém uma solução exclusiva que pode atender aos objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\
        Depois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, essas perguntas não aparecerão na tela de revisão.\
        Você está desenvolvendo um site que será executado como um Azure Web App. Os usuários serão autenticados usando suas credenciais do Azure Active Directory (Azure AD).\
        Você planeja atribuir aos usuários um dos seguintes níveis de permissão para o site: administrador, normal e leitor. A associação de grupo do Azure AD de um usuário deve ser usada para determinar o nível de permissão.\
        Você precisa configurar a autorização.<br>\
        Solução:<br>\
        ✑ Crie um novo aplicativo do Azure AD. No manifesto do aplicativo, defina o valor da opção groupMembershipClaims como All.<br>\
        ✑ No site, use o valor da reivindicação groups do JWT para o usuário determinar as permissões.<br><br>\
        A solução atende ao objetivo?",
        alternatives: [
            { description: "A. Sim", correct: true },
            { description: "B. Não", correct: false },
        ]
    },    
    {
        id: 404,
        type: "mc",
        text: "Observação: esta pergunta faz parte de uma série de perguntas que apresentam o mesmo cenário. Cada pergunta da série contém uma solução exclusiva que pode atender aos objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\
        Depois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, essas perguntas não aparecerão na tela de revisão.\
        Você está desenvolvendo um site que será executado como um Azure Web App. Os usuários serão autenticados usando suas credenciais do Azure Active Directory (Azure AD).\
        Você planeja atribuir aos usuários um dos seguintes níveis de permissão para o site: administrador, normal e leitor. A associação ao grupo do Azure AD de um usuário deve ser usada para determinar o nível de permissão.\
        Você precisa configurar a autorização.<br>\
        Solução:<br>\
        ✑ Crie um novo aplicativo do Azure AD. No manifesto do aplicativo, defina as funções do aplicativo que correspondem aos níveis de permissão necessários para o aplicativo.<br>\
        ✑ Atribua o grupo do Azure AD apropriado a cada função. No site, use o valor da declaração de funções do JWT para o usuário determinar as permissões.<br><br>\
        A solução atende à meta?",
        alternatives: [
            { description: "A. Sim", correct: true },
            { description: "B. Não", correct: false },
        ]
    },   
    {
        id: 409,
        type: "mc",
        text: "Você tem um aplicativo que inclui um aplicativo Web do Azure e vários aplicativos de funções do Azure. Os segredos do aplicativo, incluindo cadeias de conexão e certificados, são armazenados no Azure Key Vault.\
        Os segredos não devem ser armazenados no aplicativo ou no ambiente de tempo de execução do aplicativo. As alterações no Azure Active Directory (Azure AD) devem ser minimizadas.\
        Você precisa projetar a abordagem para carregar segredos do aplicativo.<br><br>\
        O que você deve fazer?",
        alternatives: [
            { description: "A. Crie uma única Identidade Gerenciada atribuída ao usuário com permissão para acessar o Key Vault e configure cada Serviço de Aplicativo para usar essa Identidade Gerenciada.", correct: true },
            { description: "B. Crie uma única entidade de serviço do Azure AD com permissão para acessar o Key Vault e usar um segredo do cliente de dentro dos Serviços de Aplicativo para acessar o Key Vault.", correct: false },
            { description: "C. Crie um sistema com Identidade Gerenciada atribuída em cada Serviço de Aplicativo com permissão para acessar o Key Vault.", correct: false },
            { description: "D. Crie uma entidade de serviço do Azure AD com permissões para acessar o Key Vault para cada Serviço de Aplicativo e use um certificado de dentro dos Serviços de Aplicativo para acessar o Key Vault.", correct: false },
        ]
    },
    {
        id: 410,
        type: "mc",
        text: "Observação: esta pergunta faz parte de uma série de perguntas que apresentam o mesmo cenário. Cada pergunta da série contém uma solução exclusiva que pode atender aos objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\
        Depois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, essas perguntas não aparecerão na tela de revisão.\
        Você está desenvolvendo um site de gerenciamento de documentos de registros médicos. O site é usado para armazenar cópias digitalizadas de formulários de admissão de pacientes.\
        Se os formulários de admissão armazenados forem baixados do armazenamento por terceiros, o conteúdo dos formulários não deve ser comprometido.\
        Você precisa armazenar os formulários de admissão de acordo com os requisitos.<br>\
        Solução:<br>\
        1. Crie uma chave do Azure Key Vault chamada skey.<br>\
        2. Criptografe os formulários de admissão usando a parte da chave pública de skey.<br>\
        3. Armazene os dados criptografados no armazenamento de Blobs do Azure.<br><br>\
        A solução atende ao objetivo?",
        alternatives: [
            { description: "A. Sim", correct: true },
            { description: "B. Não", correct: false },
        ]
    },
    {
        id: 411,
        type: "mc",
        text: "Observação: esta pergunta faz parte de uma série de perguntas que apresentam o mesmo cenário. Cada pergunta da série contém uma solução exclusiva que pode atender aos objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\
        Depois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, essas perguntas não aparecerão na tela de revisão.\
        Você está desenvolvendo um site de gerenciamento de documentos de registros médicos. O site é usado para armazenar cópias digitalizadas de formulários de admissão de pacientes.\
        Se os formulários de admissão armazenados forem baixados do armazenamento por terceiros, o conteúdo dos formulários não deve ser comprometido.\
        Você precisa armazenar os formulários de admissão de acordo com os requisitos.\
        Solução:<br>\
        1. Crie um banco de dados do Azure Cosmos DB com o Storage Service Encryption habilitado<br>.\
        2. Armazene os formulários de admissão no banco de dados do Azure Cosmos DB.<br><br>\
        A solução atende à meta?",
        alternatives: [
            { description: "A. Sim", correct: false },
            { description: "B. Não", correct: true },
        ]
    },   
    {
        id: 412,
        type: "mc",
        text: "Observação: esta pergunta faz parte de uma série de perguntas que apresentam o mesmo cenário. Cada pergunta da série contém uma solução exclusiva que pode atender aos objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\
        Depois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, essas perguntas não aparecerão na tela de revisão.\
        Você está desenvolvendo um site de gerenciamento de documentos de registros médicos. O site é usado para armazenar cópias digitalizadas de formulários de admissão de pacientes.\
        Se os formulários de admissão armazenados forem baixados do armazenamento por terceiros, o conteúdo dos formulários não deve ser comprometido.\
        Você precisa armazenar os formulários de admissão de acordo com os requisitos.<br>\
        <b>Solução: armazene os formulários de admissão como segredos do Azure Key Vault.<b><br>\
        A solução atende à meta?",
        alternatives: [
            { description: "A. Sim", correct: false },
            { description: "B. Não", correct: true },
        ]
    },    
    {
        id: 414,
        type: "mc",
        text: "Sua empresa está desenvolvendo uma API do Azure hospedada no Azure.\
        Você precisa implementar a autenticação para a API do Azure para acessar outros recursos do Azure. Você tem os seguintes requisitos:<br>\
        ✑ Todas as chamadas de API devem ser autenticadas.<br>\
        ✑ Os chamadores da API não devem enviar credenciais para a API.<br><br>\
        Qual mecanismo de autenticação você deve usar?",
        alternatives: [
            { description: "A. Básico", correct: false },
            { description: "B. Anônimo", correct: false },
            { description: "C. Identidade gerenciada", correct: true },
            { description: "D. Certificado do cliente", correct: false },
        ]
    },
    {
        id: 416,
        type: "mc",
        text: "Observação: esta pergunta faz parte de uma série de perguntas que apresentam o mesmo cenário. Cada pergunta da série contém uma solução exclusiva que pode atender aos objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\
        Depois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, essas perguntas não aparecerão na tela de revisão.<br>\
        Você desenvolve soluções do Azure.<br>\
        Você deve conceder a uma máquina virtual (VM) acesso a grupos de recursos específicos no Azure Resource Manager.<br>\
        Você precisa obter um token de acesso do Azure Resource Manager.<br>\
        <b>Solução: use um certificado X.509 para autenticar a VM com o Azure Resource Manager.</b><br>\
        A solução atende ao objetivo?",
        alternatives: [
            { description: "A. Sim", correct: false },
            { description: "B. Não", correct: true },
        ]
    }, 
    {
        id: 417,
        type: "mc",
        text: "Observação: esta pergunta faz parte de uma série de perguntas que apresentam o mesmo cenário. Cada pergunta da série contém uma solução exclusiva que pode atender aos objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\
        Depois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, essas perguntas não aparecerão na tela de revisão.<br>\
        Você desenvolve soluções do Azure.<br>\
        Você deve conceder a uma máquina virtual (VM) acesso a grupos de recursos específicos no Azure Resource Manager.<br>\
        Você precisa obter um token de acesso do Azure Resource Manager.<br>\
        <b>Solução: use a função de controle de acesso baseado em função do Reader (RBAC) para autenticar a VM com o Azure Resource Manager.</b><br>\
        A solução atende à meta?",
        alternatives: [
            { description: "A. Sim", correct: false },
            { description: "B. Não", correct: true },
        ]
    },
    {
        id: 419,
        type: "mc",
        text: "Observação: esta pergunta faz parte de uma série de perguntas que apresentam o mesmo cenário. Cada pergunta da série contém uma solução exclusiva que pode atender aos objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\
        Depois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, essas perguntas não aparecerão na tela de revisão.\
        Você está desenvolvendo um site que será executado como um Azure Web App. Os usuários serão autenticados usando suas credenciais do Azure Active Directory (Azure AD).\
        Você planeja atribuir aos usuários um dos seguintes níveis de permissão para o site: administrador, normal e leitor. A associação de grupo do Azure AD de um usuário deve ser usada para determinar o nível de permissão.\
        Você precisa configurar a autorização.<br>\
        Solução:<br>\
        ✑ Configure e use a Autenticação Integrada do Windows no site.<br>\
        ✑ No site, consulte a API do Microsoft Graph para carregar os grupos dos quais o usuário é membro.<br>\
        A solução atende ao objetivo?",
        alternatives: [
            { description: "A. Sim", correct: false },
            { description: "B. Não", correct: true },
        ]
    },  
    {
        id: 420,
        type: "mc",
        text: "Observação: esta pergunta faz parte de uma série de perguntas que apresentam o mesmo cenário. Cada pergunta da série contém uma solução exclusiva que pode atender aos objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\
        Depois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, essas perguntas não aparecerão na tela de revisão.<br>\
        Você desenvolve soluções do Azure.<br>\
        Você deve conceder a uma máquina virtual (VM) acesso a grupos de recursos específicos no Azure Resource Manager.<br>\
        Você precisa obter um token de acesso do Azure Resource Manager.<br>\
        <b>Solução: execute o cmdlet Invoke-RestMethod para fazer uma solicitação à identidade gerenciada local para o ponto de extremidade de recursos do Azure.</b><br>\
        A solução atende ao objetivo?",
        alternatives: [
            { description: "A. Sim", correct: true },
            { description: "B. Não", correct: false },
        ]
    },  
    {
        id: 422,
        type: "mc",
        text: "Você desenvolve um aplicativo que permite que os usuários carreguem fotos e vídeos no armazenamento do Azure. O aplicativo usa uma chamada de API REST de armazenamento para carregar a mídia em uma conta de armazenamento de blobs chamada Account1. Você tem contêineres de armazenamento de blobs chamados Container1 e Container2.\
        O carregamento de vídeos ocorre de forma irregular.\
        Você precisa copiar blobs específicos do Container1 para o Container2 quando um novo vídeo é carregado.<br><br>\
        O que você deve fazer?",
        alternatives: [
            { description: "A. Copie blobs para o Container2 usando a operação Put Blob da API REST do Blob Service", correct: false },
            { description: "B. Crie um tópico Event Grid que use o cmdlet Start-AzureStorageBlobCopy", correct: true },
            { description: "C. Use o AzCopy com o switch Snapshot para copiar blobs para o Container2", correct: false },
            { description: "D. Baixe o blob para uma máquina virtual e depois carregue o blob para o Container2", correct: false },
        ]
    }, 
    {
        id: 423,
        type: "mc",
        text: "Você está desenvolvendo um site ASP.NET Core que usa o Azure FrontDoor. O site é usado para criar conjuntos de dados meteorológicos personalizados para pesquisadores. Os conjuntos de dados são baixados pelos usuários como arquivos Comma Separated Value (CSV). Os dados são atualizados a cada 10 horas.\
        Arquivos específicos devem ser expurgados do cache do FrontDoor com base nos valores do Response Header.\
        Você precisa expurgar ativos individuais do cache do Front Door.<br><br>\
        Que tipo de expurgo de cache você deve usar?",
        alternatives: [
            { description: "A. single path", correct: true },
            { description: "B. wildcard", correct: false },
            { description: "C. root domain", correct: false },
        ]
    }, 
    {
        id: 424,
        type: "mc",
        text: "Sua empresa está desenvolvendo uma API do Azure.\
        Você precisa implementar a autenticação para a API do Azure. Você tem os seguintes requisitos:\
        Todas as chamadas de API devem ser seguras.<br><br>\
        ✑ Os chamadores da API não devem enviar credenciais para a API.<br>\
        Qual mecanismo de autenticação você deve usar?",
        alternatives: [
            { description: "A. Básico", correct: false },
            { description: "B. Anônimo", correct: false },
            { description: "C. Identidade gerenciada", correct: true },
            { description: "D. Certificado do cliente", correct: false },
        ]
    },   
    {
        id: 425,
        type: "mc",
        text: "Você é um desenvolvedor de uma empresa de SaaS que oferece muitos serviços web.\
        Todos os serviços web da empresa devem atender aos seguintes requisitos:<br>\
        ✑ Usar o API Management para acessar os serviços<br>\
        ✑ Usar o OpenID Connect para autenticação<br>\
        ✑ Impedir uso anônimo<br><br>\
        Uma auditoria de segurança recente descobriu que vários serviços web podem ser chamados sem nenhuma autenticação.<br>\
        Qual política de API Management você deve implementar?",
        alternatives: [
            { description: "A. jsonp", correct: false },
            { description: "B. authentication-certificate", correct: false },
            { description: "C. check-header", correct: false },
            { description: "D. validate-jwt ", correct: true },
        ]
    },
    {
        id: 431,
        type: "mc",
        text: "Você desenvolve e implanta um aplicativo Azure Logic que chama um aplicativo Azure Function. O aplicativo Azure Function inclui uma definição OpenAPI (Swagger) e usa uma\
        conta de armazenamento Azure Blob. Todos os recursos são protegidos usando o Azure Active Directory (Azure AD).<br>\
        O aplicativo Azure Logic deve acessar com segurança a conta de armazenamento Azure Blob. Os recursos do Azure AD devem permanecer se o aplicativo Azure Logic for excluído.<br>\
        Você precisa proteger o aplicativo Azure Logic.<br><br>\
        O que você deve fazer?",
        alternatives: [
            { description: "A. Crie uma identidade gerenciada atribuída ao usuário e atribua controles de acesso baseados em funções.", correct: true },
            { description: "B. Crie uma função personalizada do Azure AD e atribua a função à conta de armazenamento de Blobs do Azure.", correct: false },
            { description: "C. Crie um Azure Key Vault e emita um certificado de cliente.", correct: false },
            { description: "D. Crie uma identidade gerenciada atribuída pelo sistema e emita um certificado de cliente.", correct: false },
            { description: "E. Crie uma função personalizada do Azure AD e atribua controles de acesso baseados em função.", correct: false },
        ]
    },   
    {
        id: 437,
        type: "mc",
        text: "Você implanta um aplicativo Web do Azure App Service. Você cria um registro de aplicativo para o aplicativo no Azure Active Directory (Azure AD) e no Twitter.\
        O aplicativo deve autenticar usuários e deve usar SSL para todas as comunicações. O aplicativo deve usar o Twitter como o provedor de identidade.<br>\
        Você precisa validar a solicitação do Azure AD no código do aplicativo.<br><br>\
        O que você deve validar?",
        alternatives: [
            { description: "A. Cabeçalho do token de ID", correct: false },
            { description: "B. Assinatura do token de ID", correct: true },
            { description: "C. Código de resposta HTTP", correct: false },
            { description: "D. ID do inquilino", correct: false },
        ]
    },  
    {
        id: 438,
        type: "mc",
        text: "Uma equipe de desenvolvimento está criando uma nova API REST. A API armazenará dados no armazenamento de Blobs do Azure. Você planeja implantar a API no Azure App Service.\
        Os desenvolvedores devem acessar a conta de armazenamento de Blobs do Azure para desenvolver a API pelos próximos dois meses. A conta de armazenamento de Blobs do Azure não deve ser acessível pelos desenvolvedores após o período de dois meses.\
        Você precisa conceder aos desenvolvedores acesso à conta de armazenamento de Blobs do Azure.\
        <br>O que você deve fazer?",
        alternatives: [
            { description: "A. Gere uma assinatura de acesso compartilhado (SAS) para a conta de armazenamento de Blobs do Azure e forneça a SAS a todos os desenvolvedores.", correct: true },
            { description: "B. Crie e aplique uma nova política de gerenciamento de ciclo de vida para incluir um valor de data do último acesso. Aplique a política à conta de armazenamento do Azure Blob.", correct: false },
            { description: "C. Forneça a todos os desenvolvedores a chave de acesso para a conta de armazenamento do Azure Blob. Atualize a API para incluir o carimbo de data/hora do Tempo Universal Coordenado (UTC) para o cabeçalho da solicitação.", correct: false },
            { description: "D. Conceda a todos os desenvolvedores acesso à conta de armazenamento de Blobs do Azure atribuindo funções de controle de acesso baseado em função (RBAC).", correct: false },
        ]
    },
    {
        id: 444,
        type: "mc",
        text: "Você gerencia um aplicativo de processamento de dados que recebe solicitações de uma fila do Azure Storage.\
        Você precisa gerenciar o acesso à fila. Você tem os seguintes requisitos:<br>\
        ✑ Fornecer acesso à fila do Azure para outros aplicativos.<br>\
        ✑ Garantir que você pode revogar o acesso à fila sem precisar regenerar as chaves da conta de armazenamento.<br>\
        ✑ Especifique o acesso no nível da fila e não no nível da conta de armazenamento.<br><br>\
        Qual tipo de assinatura de acesso compartilhado (SAS) você deve usar?",
        alternatives: [
            { description: "A. Serviço SAS com uma política de acesso armazenada", correct: true },
            { description: "B. Conta SAS", correct: false },
            { description: "C. Delegação de Usuário SAS", correct: false },
            { description: "D. Serviço SAS com SAS ad hoc", correct: false },
        ]
    },
    {
        id: 446,
        type: "mc",
        text: "Você está construindo um aplicativo da Web que usa a plataforma de identidade da Microsoft para autenticação de usuário.\
        Você está implementando a identificação de usuário para o aplicativo da Web.\
        Você precisa recuperar uma reivindicação para identificar exclusivamente um usuário.<br>\
        Qual tipo de reivindicação você deve usar?",
        alternatives: [
            { description: "A. aud", correct: false },
            { description: "B. nonce", correct: false },
            { description: "C. oid", correct: true },
            { description: "D. idp", correct: false },
        ]
    }, 
    {
        id: 447,
        type: "mc",
        text: "Você está desenvolvendo uma Função do Azure que chama APIs externas fornecendo um token de acesso para a API. O token de acesso é armazenado em um segredo chamado token em um\
        Azure Key Vault chamado mykeyvault.\
        Você precisa garantir que a Função do Azure possa acessar o token. <br>\
        Qual valor você deve armazenar na configuração do aplicativo Função do Azure?",
        alternatives: [
            { description: "A. KeyVault:mykeyvault;Secret:token", correct: false },
            { description: "B. App:Settings:Secret:mykeyvault:token", correct: false },
            { description: "C. AZUREKVCONNSTR_ https://mykeyveult.vault.ezure.net/secrets/token/", correct: false },
            { description: "D. @Microsoft.KeyVault(SecretUri=https://mykeyvault.vault.azure.net/secrets/token/)", correct: true },
        ]
    },
    {
        id: 448,
        type: "mc",
        text: "Uma empresa mantém vários aplicativos web e móveis. Cada aplicativo usa provedores de identidade internos personalizados, bem como provedores de identidade social.\
        Você precisa implementar o logon único (SSO) para todos os aplicativos.<br><br>\
        O que você deve fazer?",
        alternatives: [
            { description: "A. Use o Azure Active Directory B2C (Azure AD B2C) com políticas personalizadas.", correct: true },
            { description: "B. Use o Azure Active Directory B2B (Azure AD B2B) e habilite a colaboração externa.", correct: false },
            { description: "C. Use o Azure Active Directory B2C (Azure AD B2C) com fluxos de usuários.", correct: false },
            { description: "D. Use o Azure Active Directory B2B (Azure AD B2B).", correct: false },
        ]
    },  
    {
        id: 450,
        type: "mc",
        text: "Você está desenvolvendo um portal de usuário para uma empresa.\
        Você precisa criar um relatório para o portal que liste informações sobre funcionários que são especialistas no assunto para um tópico específico. Você deve garantir que os administradores tenham controle total e consentimento sobre os dados.\
        <br>Qual tecnologia você deve usar?",
        alternatives: [
            { description: "A. Conexão de dados do Microsoft Graph", correct: true },
            { description: "B. API do Microsoft Graph", correct: false },
            { description: "C. Conectores do Microsoft Graph", correct: false },
        ]
    },     
    {
        id: 455,
        type: "mc",
        text: "Você está desenvolvendo um aplicativo da Web que usa a plataforma de identidade da Microsoft para autenticação de usuários e recursos. O aplicativo da Web chama várias APIs REST.\
        Uma chamada de API REST deve ler o calendário do usuário. O aplicativo da Web requer permissão para enviar um e-mail como o usuário.<br>\
        Você precisa autorizar o aplicativo da Web e a API.<br>\
        Qual parâmetro você deve usar?",
        alternatives: [
            { description: "A. tenant", correct: false },
            { description: "B. code_challenge", correct: false },
            { description: "C. state", correct: false },
            { description: "D. client_id", correct: false },
            { description: "E. scope", correct: true },
        ]
    },
    {
        id: 458,
        type: "mc",
        text: "Você desenvolve e implanta um aplicativo Web do Azure App Service chamado App1. Você cria um novo Azure Key Vault chamado Vault1. Você importa várias chaves de API, senhas, certificados e chaves criptográficas para o Vault1.\
        Você precisa conceder acesso do App1 ao Vault1 e rotacionar credenciais automaticamente. <br>As credenciais não devem ser armazenadas em código.<br>\
        O que você deve fazer?",
        alternatives: [
            { description: "A. Habilite a autenticação do App Service para Appl. Atribua uma função RBAC personalizada ao Vault1.", correct: false },
            { description: "B. Adicione uma ligação TLS/SSL ao App1.", correct: false },
            { description: "C. Carregue um certificado de cliente autoassinado no Vault1. Atualize o App1 para usar o certificado de cliente.", correct: false },
            { description: "D. Atribua uma identidade gerenciada ao App1.", correct: true },
        ]
    },   
    {
        id: 459,
        type: "mc",
        text: "Você está desenvolvendo um aplicativo Java para ser implantado no Azure. O aplicativo armazena dados confidenciais no Azure Cosmos DB.\
        Você precisa configurar o Always Encrypted para criptografar os dados confidenciais dentro do aplicativo.<br>\
        O que você deve fazer primeiro?",
        alternatives: [
            { description: "A. Crie um novo contêiner para incluir uma política de criptografia com as propriedades JSON a serem criptografadas.", correct: false },
            { description: "B. Crie uma chave gerenciada pelo cliente (CMK) e armazene a chave em uma nova instância do Azure Key Vault", correct: true },
            { description: "C. Crie uma chave de criptografia de dados (DEK) usando o SDK do Azure Cosmos DB e armazene a chave no Azure Cosmos DB.", correct: false },
            { description: "D. Crie uma identidade gerenciada do Azure AD e atribua a identidade a uma nova instância do Azure Key Vault.", correct: false },
        ]
    },     
    {
        id: 466,
        type: "mc",
        text: "Você está desenvolvendo várias APIs hospedadas do Azure API Management (APIM).\
        Você deve transformar as APIs para ocultar informações privadas de backend e obscurecer a pilha de tecnologia usada para implementar o processamento de backend.\
        <br>Você precisa proteger todas as APIs.\
        <br>O que você deve fazer?",
        alternatives: [
            { description: "A. Configure e aplique uma nova política de entrada com escopo para um produto.", correct: false },
            { description: "B. Configure e aplique uma nova política de saída com escopo para a operação.", correct: true },
            { description: "C. Configure e aplique uma nova política de saída com escopo global.", correct: false },
            { description: "D. Configurar e aplicar uma nova política de backend com escopo global.", correct: false },
        ]
    },  
    {
        id: 473,
        type: "mc",
        text: "Você está desenvolvendo um aplicativo que usa chaves armazenadas no Azure Key Vault.\
        Você precisa impor um algoritmo criptográfico específico e um tamanho de chave para chaves armazenadas no vault.<br>\
        O que você deve usar?",
        alternatives: [
            { description: "A. Secret versioning", correct: false },
            { description: "B. Azure Policy", correct: true },
            { description: "C. Key Vault Firewall", correct: false },
            { description: "D. Access policies", correct: false },
        ]
    },  
    {
        id: 502,
        type: "mc",
        text: "Observação: esta pergunta faz parte de uma série de perguntas que apresentam o mesmo cenário. Cada< pergunta da série contém uma solução exclusiva. Determine se a solução atende aos objetivos declarados.\
        Você está desenvolvendo e implantando vários aplicativos da Web ASP.NET no Azure App Service. Você planeja salvar informações de estado de sessão e saída HTML.\
        Você deve usar um mecanismo de armazenamento com os seguintes requisitos:<br>\
        ✑ Compartilhar o estado da sessão em todos os aplicativos da Web ASP.NET.<br>\
        ✑ Oferecer suporte ao acesso controlado e simultâneo aos mesmos dados de estado de sessão para vários leitores e um único gravador.<br>\
        ✑ Salvar respostas HTTP completas para solicitações simultâneas.<br>\
        Você precisa armazenar as informações.<br>\
        <b>Solução proposta: habilitar o roteamento de solicitação de aplicativo (ARR).</b><br>\
        A solução atende ao objetivo?",
        alternatives: [
            { description: "A. Sim", correct: false },
            { description: "B. Não", correct: true },
        ]
    },                     
    {
        id: 503,
        type: "mc",
        text: "Observação: esta pergunta faz parte de uma série de perguntas que apresentam o mesmo cenário. Cada pergunta da série contém uma solução exclusiva. Determine se a solução atende aos objetivos declarados.\
        Você está desenvolvendo e implantando vários aplicativos da Web ASP.NET no Azure App Service. Você planeja salvar informações de estado de sessão e saída HTML.\
        Você deve usar um mecanismo de armazenamento com os seguintes requisitos:<br>\
        ✑ Compartilhar o estado da sessão em todos os aplicativos da Web ASP.NET.<br>\
        ✑ Oferecer suporte ao acesso controlado e simultâneo aos mesmos dados de estado de sessão para vários leitores e um único gravador.<br>\
        ✑ Salvar respostas HTTP completas para solicitações simultâneas.<br>\
        Você precisa armazenar as informações.<br>\
        <b>Solução proposta: implantar e configurar um banco de dados do Azure para PostgreSQL. Atualizar os aplicativos da Web.</b><br>\
        A solução atende ao objetivo?",
        alternatives: [
            { description: "A. Sim", correct: false },
            { description: "B. Não", correct: true },
        ]
    }, 
    {
        id: 507,
        type: "mc",
        text: "Você desenvolve uma solução de gateway para uma API de notícias voltada ao público. O back-end da API de notícias é implementado como um serviço RESTful e usa uma especificação OpenAPI.\
        Você precisa garantir que pode acessar a API de notícias usando uma instância do serviço Azure API Management.\
        <br><br>Qual comando do Azure PowerShell você deve executar?",
        alternatives: [
            { description: "A. Import-AzureRmApiManagementApi -Context $ApiMgmtContext -SpecificationFormat \"Swagger\" -SpecificationPath $SwaggerPath -Path $Path", correct: true },
            { description: "B. New-AzureRmApiManagementBackend -Context $ApiMgmtContext -Url $Url -Protocol http", correct: false },
            { description: "C. New-AzureRmApiManagement -ResourceGroupName $ResourceGroup -Name $Name Location $Location -Organization $Org -AdminEmail $AdminEmail", correct: false },
            { description: "D. New-AzureRmApiManagementBackendProxy -Url $ApiUrl", correct: false },
        ]
    },    
    {
        id: 509,
        type: "mc",
        text: "Você está desenvolvendo uma função do Azure que se conecta a uma instância do Banco de Dados SQL do Azure. A função é acionada por uma fila do Armazenamento do Azure.\
        Você recebe relatórios de vários System.InvalidOperationExceptions com a seguinte mensagem:<br>\
        `Tempo limite expirado. O período de tempo limite expirou antes de obter uma conexão do pool. Isso pode ter ocorrido porque todas as conexões em pool estavam em uso e o tamanho máximo do pool foi atingido.`<br>\
        <br>Você precisa evitar a exceção.\
        <br>O que você deve fazer?",
        alternatives: [
            { description: "A. No arquivo host.json, diminua o valor da opção batchSize", correct: true },
            { description: "B. Converter o gatilho para o Azure Event Hub", correct: false },
            { description: "C. Converta a função do Azure para o plano Premium", correct: false },
            { description: "D. No arquivo function.json, altere o valor da opção type para queueScaling", correct: false },
        ]
    },
    {
        id: 510,
        type: "mc",
        text: "Observação: esta pergunta faz parte de uma série de perguntas que apresentam o mesmo cenário. Cada pergunta da série contém uma solução exclusiva. Determine se a solução atende aos objetivos declarados.\
        Você está desenvolvendo e implantando vários aplicativos da Web ASP.NET no Azure App Service. Você planeja salvar informações de estado de sessão e saída HTML. Você\
        deve usar um mecanismo de armazenamento com os seguintes requisitos:<br>\
        ✑ Compartilhar estado de sessão em todos os aplicativos da Web ASP.NET.<br>\
        ✑ Oferecer suporte a acesso controlado e simultâneo aos mesmos dados de estado de sessão para vários leitores e um único gravador.<br>\
        ✑ Salvar respostas HTTP completas para solicitações simultâneas.<br>\
        Você precisa armazenar as informações.<br>\
        <b>Solução proposta: implantar e configurar o Cache do Azure para Redis. Atualizar os aplicativos da Web.</b><br>\
        A solução atende ao objetivo?",
        alternatives: [
            { description: "A. Sim", correct: true },
            { description: "B. Não", correct: false },
        ]
    }, 
    {
        id: 515,
        type: "mc",
        text: "Você está desenvolvendo aplicativos para uma empresa. Você planeja hospedar os aplicativos no Azure App Services.\
        A empresa tem os seguintes requisitos:<br>\
        ✑ A cada cinco minutos, verifique se os sites são responsivos.<br>\
        ✑ Verifique se os sites respondem dentro de um limite de tempo especificado. Solicitações dependentes, como imagens e arquivos JavaScript, devem ser carregadas corretamente.<br>\
        ✑ Gere alertas se um site estiver com problemas.<br>\
        ✑ Se um site não carregar, o sistema deve tentar recarregar o site mais três vezes.<br>\
        Você precisa implementar esse processo com o mínimo de esforço.<br>\
        O que você deve fazer?",
        alternatives: [
            { description: "A. Crie um teste web Selenium e configure-o para ser executado na sua estação de trabalho como uma tarefa agendada.", correct: false },
            { description: "B. Configure um teste de ping de URL para consultar a página inicial. ", correct: true },
            { description: "C. Crie uma função do Azure para consultar a página inicial.", correct: false },
            { description: "D. Crie um teste web de várias etapas para consultar a página inicial.", correct: false },
            { description: "E. Crie um teste de disponibilidade de faixa personalizado para consultar a página inicial.", correct: false },
        ]
    },   
    {
        id: 516,
        type: "mc",
        text: "Você desenvolve e adiciona várias funções a um aplicativo Azure Function que usa o host de tempo de execução mais recente. As funções contêm vários pontos de extremidade da API REST protegidos usando SSL. O aplicativo Azure Function é executado em um plano de Consumo.\
        Você deve enviar um alerta quando qualquer um dos pontos de extremidade da função estiver indisponível ou respondendo muito lentamente.<br>\
        Você precisa monitorar a disponibilidade e a capacidade de resposta das funções.<br>\
        O que você deve fazer?",
        alternatives: [
            { description: "A. Crie um teste de ping de URL.", correct: false },
            { description: "B. Crie uma função acionada por temporizador que chame TrackAvailability() e envie os resultados para o Application Insights.", correct: true },
            { description: "C. Crie uma função acionada por temporizador que chame GetMetric(\"Request Size\") e envie os resultados para o Application Insights.", correct: false },
            { description: "D. Adicione uma nova configuração de diagnóstico ao aplicativo Azure Function. Habilite as opções FunctionAppLogs e Send to Log Analytics.", correct: false },
        ]
    }, 
    {
        id: 528,
        type: "mc",
        text: "Uma organização hospeda aplicativos da Web no Azure. A organização usa o Azure Monitor.<br>\
        Você descobre que alterações de configuração foram feitas em alguns dos aplicativos da Web.<br>\
        Você precisa identificar as alterações de configuração.<br>\
        Qual log do Azure Monitor você deve revisar?",
        alternatives: [
            { description: "A. AppServiceAppLogs", correct: false },
            { description: "B. Logs de plataforma de ambiente de serviço de aplicativo", correct: true },
            { description: "C. Logs do Console do Serviço de Aplicativo", correct: false },
            { description: "D. Logs de auditoria do serviço de aplicativo", correct: false },
        ]
    }, 
    {
        id: 529,
        type: "mc",
        text: "Você desenvolve e implanta um aplicativo Web do Azure App Service em um ambiente de produção. Você habilita a configuração Always On e as extensões de site do Application Insights.<br><br>\
        Você implanta uma atualização de código e recebe várias solicitações e exceções com falha no aplicativo Web.<br>\
        Você precisa validar o desempenho e as contagens de falhas do aplicativo Web quase em tempo real.<br>\
        Qual ferramenta do Application Insights você deve usar?",
        alternatives: [
            { description: "A. Profiler", correct: false },
            { description: "B. Smart Detection", correct: false },
            { description: "C. Live Metrics Stream", correct: true },
            { description: "D. Application Map", correct: false },
            { description: "E. Snapshot Debugger", correct: false },
        ]
    },  
    {
        id: 532,
        type: "mc",
        text: "Você está desenvolvendo um aplicativo da Web baseado no Azure. O aplicativo fica offline periodicamente para executar o processamento de dados offline. Enquanto o aplicativo está offline, vários alertas do Azure Monitor são disparados, o que resulta no pager do desenvolvedor de plantão.<br>\
        O aplicativo deve sempre registrar quando o aplicativo estiver offline por qualquer motivo.<br>\
        Você precisa garantir que o desenvolvedor de plantão não seja pager durante o processamento offline.<br>\
        O que você deve fazer?",
        alternatives: [
            { description: "A. Adicione regras de processamento de alertas do Azure Monitor para suprimir notificações.", correct: true },
            { description: "B. Desabilite os alertas de integridade do serviço Azure Monitor durante o processamento offline.", correct: false },
            { description: "C. Crie um alerta de métrica do Azure Monitor.", correct: false },
            { description: "D. Crie um grupo de ações do Azure Monitor que suprima os alertas.", correct: false },
        ]
    },                        
    {
        id: 533,
        type: "mc",
        text: "Você está desenvolvendo um jogo online que inclui um recurso que permite que os jogadores interajam com outros jogadores do mesmo time dentro de uma certa distância. O cálculo para determinar os jogadores no alcance ocorre quando os jogadores se movem e são armazenados em cache em uma instância do Azure Cache for Redis.\
        O sistema deve priorizar os jogadores com base em quão recentemente eles se moveram e não deve priorizar os jogadores que saíram do jogo.<br>\
        Você precisa selecionar uma política de despejo.<br>\
        Qual política de despejo você deve usar?",
        alternatives: [
            { description: "A. allkeys-Iru", correct: false },
            { description: "B. volatile-Iru", correct: true },
            { description: "C. allkeys-lfu", correct: false },
            { description: "D. volatile-ttl", correct: false },
        ]
    },    
    {
        id: 534,
        type: "mc",
        text: "Você desenvolve um aplicativo Web do Azure App Service e o implanta em um ambiente de produção. Você habilita o Application Insights para o aplicativo Web.\
        O aplicativo Web está lançando várias exceções no ambiente.<br>\
        Você precisa examinar o estado do código-fonte e das variáveis ​​quando as exceções são lançadas.<br>\
        Qual recurso do Application Insights você deve configurar?",
        alternatives: [
            { description: "A. Smart detection", correct: false },
            { description: "B. Profiler", correct: false },
            { description: "C. Snapshot Debugger", correct: true },
            { description: "D. Standard test", correct: false },
        ]
    },
    {
        id: 540,
        type: "mc",
        text: "Você está criando um aplicativo para rastrear torres de celular que estão disponíveis para telefones quase em tempo real. Um telefone enviará informações para o aplicativo usando o serviço Azure Web PubSub. Os dados serão processados ​​usando um aplicativo Azure Functions. O tráfego será transmitido usando uma rede de entrega de conteúdo (CDN).<br>\
        A função do Azure deve ser protegida contra invocações mal configuradas ou não autorizadas.<br>\
        Você precisa garantir que a CDN permita a proteção da função do Azure.<br>\
        Qual cabeçalho HTTP deve estar na lista permitida?",
        alternatives: [
            { description: "A. Authorization", correct: false },
            { description: "B. WebHook-Request-Callback", correct: false },
            { description: "C. Resource", correct: false },
            { description: "D. WebHook-Request-Origin", correct: true },
        ]
    }, 
    {
        id: 544,
        type: "mc",
        text: "Você tem uma instância de nível Standard do Azure API Management (APIM) chamada APIM1 que usa um gateway gerenciado.<br>\
        Você planeja usar APIM1 para publicar uma API chamada API1 que usa um banco de dados de backend que suporta apenas um volume limitado de solicitações por minuto. Você também precisa de uma política para API1 que irá minimizar a possibilidade de que o número de solicitações para o banco de dados de backend de um endereço IP individual que você especificar exceda o limite suportado.<br>\
        Você precisa identificar uma política para API1 que irá atender aos requisitos.<br>\
        Qual política você deve usar?",
        alternatives: [
            { description: "A. ip-filter", correct: false },
            { description: "B. quota-by-key", correct: false },
            { description: "C. rate-limit-by-key", correct: true },
            { description: "D. rate-limit", correct: false },
        ]
    },  
    {
        id: 545,
        type: "mc",
        text: "Você desenvolve um aplicativo da Web que vende acesso a vagas de última hora para acampamentos infantis que acontecem nos fins de semana. O aplicativo usa o Azure Application Insights para todos os alertas e monitoramentos.\
        O aplicativo deve alertar os operadores quando um problema técnico estiver impedindo as vendas para os acampamentos.<br>\
        Você precisa criar um alerta para detectar problemas técnicos.<br>\
        Qual tipo de alerta você deve usar?",
        alternatives: [
            { description: "A. Alerta de métrica usando várias séries temporais", correct: false },
            { description: "B. Alerta métrico usando limites dinâmicos", correct: true },
            { description: "C. Alerta de log usando várias séries temporais", correct: false },
            { description: "D. Alerta de log usando limites dinâmicos", correct: false },
        ]
    },
    {
        id: 601,
        type: "mc",
        text: "Observação: esta pergunta faz parte de uma série de perguntas que apresentam o mesmo cenário. Cada pergunta da série contém uma solução exclusiva que pode atender aos objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\
        Depois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, essas perguntas não aparecerão na tela de revisão.<br><br>\
        Você está desenvolvendo uma solução do Azure para coletar dados de dispositivos de ponto de venda (POS) de 2.000 lojas localizadas em todo o mundo. Um único dispositivo pode produzir 2 megabytes (MB) de dados a cada 24 horas. Cada local de loja tem de um a cinco dispositivos que enviam dados.<br>\
        Você deve armazenar os dados do dispositivo no armazenamento de Blobs do Azure. Os dados do dispositivo devem ser correlacionados com base em um identificador de dispositivo. Espera-se que lojas adicionais sejam abertas no futuro.<br>\
        Você precisa implementar uma solução para receber os dados do dispositivo.<br>\
        <b>Solução: provisione um Barramento de Serviço do Azure. Configure um tópico para receber os dados do dispositivo usando um filtro de correlação.</b><br>\
        A solução atende à meta?",
        alternatives: [
            { description: "A. Sim", correct: false },
            { description: "B. Não", correct: true },
        ]
    },   
    {
        id: 602,
        type: "mc",
        text: "Observação: esta pergunta faz parte de uma série de perguntas que apresentam o mesmo cenário. Cada pergunta da série contém uma solução exclusiva que pode atender aos objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\
        Depois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, essas perguntas não aparecerão na tela de revisão.<br>\
        Você está desenvolvendo uma solução do Azure para coletar dados de dispositivos de ponto de venda (POS) de 2.000 lojas localizadas em todo o mundo. Um único dispositivo pode produzir 2 megabytes (MB) de dados a cada 24 horas. Cada local de loja tem de um a cinco dispositivos que enviam dados.<br>\
        Você deve armazenar os dados do dispositivo no armazenamento de Blobs do Azure. Os dados do dispositivo devem ser correlacionados com base em um identificador de dispositivo. Espera-se que lojas adicionais sejam abertas no futuro.<br>\
        Você precisa implementar uma solução para receber os dados do dispositivo.<br>\
        <b>Solução: provisionar uma grade de eventos do Azure. Configurar a filtragem de eventos para avaliar o identificador do dispositivo.</b><br>\
        A solução atende à meta?",
        alternatives: [
            { description: "A. Sim", correct: false },
            { description: "B. Não", correct: true },
        ]
    }, 
    {
        id: 607,
        type: "mc",
        text: "Observação: esta pergunta faz parte de uma série de perguntas que apresentam o mesmo cenário. Cada pergunta da série contém uma solução exclusiva que pode atender aos objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\
        Depois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, essas perguntas não aparecerão na tela de revisão.\
        Você está desenvolvendo um aplicativo do Serviço do Azure que processa dados da fila quando recebe uma mensagem de um aplicativo móvel. As mensagens podem não ser enviadas ao serviço de forma consistente.\
        Você tem os seguintes requisitos:<br>\
        ✑ O tamanho da fila não deve crescer mais do que 80 gigabytes (GB).<br>\
        ✑ Use a ordenação de mensagens primeiro a entrar, primeiro a sair (FIFO).<br>\
        ✑ Minimize os custos do Azure.<br><br>\
        Você precisa implementar a solução de mensagens.<br>\
        <b>Solução: use a API .Net para adicionar uma mensagem a uma Fila de Armazenamento do Azure a partir do aplicativo móvel. Crie um Aplicativo de Função do Azure que use um\
        gatilho de Fila de Armazenamento do Azure.</b><br>\
        A solução atende ao objetivo?",
        alternatives: [
            { description: "A. Sim", correct: false },
            { description: "B. Não", correct: true },
        ]
    },
    {
        id: 615,
        type: "mc",
        text: "Uma empresa está implementando um componente de mensagens de publicação-assinatura (Pub/Sub) usando o Azure Service Bus. Você está desenvolvendo o primeiro aplicativo de assinatura.\
        No portal do Azure, você vê que as mensagens estão sendo enviadas para a assinatura para cada tópico. Você cria e inicializa um objeto de cliente de assinatura fornecendo os detalhes corretos, mas o aplicativo de assinatura ainda não está consumindo as mensagens.<br>\
        Você precisa garantir que o cliente de assinatura processe todas as mensagens.<br>\
        Qual segmento de código você deve usar?",
        alternatives: [
            { description: "A. await subscriptionClient.AddRuleAsync(new RuleDescription(RuleDescription.DefaultRuleName, new TrueFilter()));", correct: false },
            { description: "B. subscriptionClient = new SubscriptionClient(ServiceBusConnectionString, TopicName, SubscriptionName);", correct: false },
            { description: "C. await subscriptionClient.CloseAsync();", correct: false },
            { description: "D. subscriptionClient.RegisterMessageHandler(ProcessMessagesAsync, messageHandlerOptions);", correct: true },
        ]
    },
    {
        id: 616,
        type: "mc",
        text: "Observação: esta pergunta faz parte de uma série de perguntas que apresentam o mesmo cenário. Cada pergunta da série contém uma solução exclusiva que pode atender aos objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\
        Depois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, essas perguntas não aparecerão na tela de revisão.\
        Você está desenvolvendo um aplicativo do Serviço do Azure que processa dados da fila quando recebe uma mensagem de um aplicativo móvel. As mensagens podem não ser enviadas ao serviço de forma consistente.\
        Você tem os seguintes requisitos:<br>\
        ✑ O tamanho da fila não deve crescer mais do que 80 gigabytes (GB).<br>\
        ✑ Use a ordenação de mensagens primeiro a entrar, primeiro a sair (FIFO).<br>\
        ✑ Minimize os custos do Azure.<br>\
        Você precisa implementar a solução de mensagens.<br>\
        <b>Solução: use a API .Net para adicionar uma mensagem a uma Fila de Armazenamento do Azure a partir do aplicativo móvel. Crie uma VM do Azure que seja acionada a partir de\
        eventos da Fila de Armazenamento do Azure.</b><br>\
        A solução atende ao objetivo?",
        alternatives: [
            { description: "A. Sim", correct: false },
            { description: "B. Não", correct: true },
        ]
    }, 
    {
        id: 617,
        type: "mc",
        text: "Observação: esta pergunta faz parte de uma série de perguntas que apresentam o mesmo cenário. Cada pergunta da série contém uma solução exclusiva que pode atender aos objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\
        Depois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, essas perguntas não aparecerão na tela de revisão.\
        Você está desenvolvendo um aplicativo do Serviço do Azure que processa dados da fila quando recebe uma mensagem de um aplicativo móvel. As mensagens podem não ser enviadas ao serviço de forma consistente.\
        Você tem os seguintes requisitos:<br>\
        ✑ O tamanho da fila não deve crescer mais do que 80 gigabytes (GB).<br>\
        ✑ Use a ordenação de mensagens primeiro a entrar, primeiro a sair (FIFO).<br>\
        ✑ Minimize os custos do Azure.<br>\
        Você precisa implementar a solução de mensagens.<br>\
        <b>Solução: use a API .Net para adicionar uma mensagem a uma Fila do Barramento de Serviço do Azure a partir do aplicativo móvel. Crie uma VM do Windows do Azure que seja acionada a partir da\
        Fila do Barramento de Serviço do Azure.</b><br>\
        A solução atende ao objetivo?",
        alternatives: [
            { description: "A. Sim", correct: false },
            { description: "B. Não", correct: true },
        ]
    }, 
    {
        id: 622,
        type: "mc",
        text: "Você está criando um aplicativo que usará o CosmosDB para armazenamento de dados. O aplicativo processará lotes de dados relacionais.\
        Você precisa selecionar uma API para o aplicativo.<br>\
        Qual API você deve usar?",
        alternatives: [
            { description: "A. API do MongoDB", correct: false },
            { description: "B. API de tabela", correct: false },
            { description: "C. API SQL", correct: true },
            { description: "D. API do Cassandra", correct: false },
        ]
    },     
    {
        id: 626,
        type: "mc",
        text: "Você está desenvolvendo uma solução de e-commerce que usa uma arquitetura de microsserviços.\
        Você precisa projetar um backplane de comunicação para comunicar mensagens transacionais entre várias partes da solução. As mensagens devem ser comunicadas na ordem primeiro a entrar, primeiro a sair (FIFO).\
        <br>O que você deve usar?",
        alternatives: [
            { description: "A. Fila de armazenamento do Azure", correct: false },
            { description: "B. Hub de eventos do Azure", correct: false },
            { description: "C. Barramento de Serviço do Azure", correct: true },
            { description: "D. Grade de eventos do Azure", correct: false },
        ]
    },     
    {
        id: 628,
        type: "mc",
        text: "Observação: esta pergunta faz parte de uma série de perguntas que apresentam o mesmo cenário. Cada pergunta da série contém uma solução exclusiva que pode atender aos objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\
        Depois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, essas perguntas não aparecerão na tela de revisão.\
        Você está desenvolvendo um aplicativo de serviço do Azure que processa dados de fila quando recebe uma mensagem de um aplicativo móvel. As mensagens podem não ser enviadas ao serviço de forma consistente.\
        Você tem os seguintes requisitos:<br>\
        ✑ O tamanho da fila não deve crescer mais do que 80 gigabytes (GB).<br>\
        ✑ Use a ordenação de mensagens primeiro a entrar, primeiro a sair (FIFO).<br>\
        ✑ Minimize os custos do Azure.<br>\
        Você precisa implementar a solução de mensagens.<br>\
        <b>Solução: use a API .Net para adicionar uma mensagem a uma fila do Azure Service Bus a partir do aplicativo móvel. Crie um aplicativo de função do Azure que use um gatilho de fila do Azure\
        Service Bus.</b><br>\
        A solução atende à meta?",
        alternatives: [
            { description: "A. Sim", correct: true },
            { description: "B. Não", correct: false },
        ]
    },   
    {
        id: 629,
        type: "mc",
        text: "Observação: esta pergunta faz parte de uma série de perguntas que apresentam o mesmo cenário. Cada pergunta da série contém uma solução exclusiva que pode atender aos objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\
        Depois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, essas perguntas não aparecerão na tela de revisão.<br>\
        Você está desenvolvendo uma solução do Azure para coletar dados de dispositivos de ponto de venda (POS) de 2.000 lojas localizadas em todo o mundo. Um único dispositivo pode produzir 2 megabytes (MB) de dados a cada 24 horas. Cada local de loja tem de um a cinco dispositivos que enviam dados.<br>\
        Você deve armazenar os dados do dispositivo no armazenamento de Blobs do Azure. Os dados do dispositivo devem ser correlacionados com base em um identificador de dispositivo. Espera-se que lojas adicionais sejam abertas no futuro.<br>\
        Você precisa implementar uma solução para receber os dados do dispositivo.<br>\
        <b>Solução: provisione um Hub de Notificação do Azure. Registre todos os dispositivos no hub.</b><br>\
        A solução atende à meta?",
        alternatives: [
            { description: "A. Sim", correct: false },
            { description: "B. Não", correct: true },
        ]
    },
    {
        id: 630,
        type: "mc",
        text: "Você está criando um programa de fidelidade para um grande produtor de salgadinhos. Quando os clientes compram um salgadinho em qualquer um dos 100 varejistas participantes, o evento é registrado no Azure\
        Event Hub. <br>\
        Cada varejista recebe um identificador exclusivo que é usado como o identificador principal para o programa de fidelidade.<br>\
        Os varejistas devem poder ser adicionados ou removidos a qualquer momento. Os varejistas devem poder registrar as vendas apenas para si mesmos.<br>\
        Você precisa garantir que os varejistas possam registrar as vendas.<br>\
        O que você deve fazer?",
        alternatives: [
            { description: "A. Use políticas do editor para varejistas.", correct: true },
            { description: "B. Crie uma partição para cada varejista.", correct: false },
            { description: "C. Defina um namespace para cada varejista.", correct: false },
        ]
    }, 
    {
        id: 633,
        type: "mc",
        text: "Você está desenvolvendo um aplicativo de rastreamento de pedágio rodoviário que envia eventos de rastreamento usando o Azure Event Hubs usando o nível premium.\
        Cada estrada deve ter uma política de limitação atribuída exclusivamente.<br>\
        Você precisa configurar o hub de eventos para permitir a limitação por estrada.<br>\
        O que você deve fazer?",
        alternatives: [
            { description: "A. Use um grupo de consumidores exclusivo para cada estrada.", correct: false },
            { description: "B. Garanta que cada estrada armazene eventos em uma partição diferente.", correct: false },
            { description: "C. Certifique-se de que cada estrada tenha uma sequência de conexão exclusiva.", correct: false },
            { description: "D. Use um grupo de aplicativos exclusivo para cada estrada.", correct: true },
        ]
    },  
    {
        id: 635,
        type: "mc",
        text: "Você está criando um aplicativo da Web B2B que usa a colaboração B2B do Azure para autenticação. Os clientes pagantes autenticam-se no Azure B2B usando federação.\
        O aplicativo permite que os usuários se inscrevam em contas de teste usando qualquer endereço de e-mail.<br>\
        Quando um usuário se converte em um cliente pagante, os dados associados ao teste devem ser mantidos, mas o usuário deve se autenticar usando federação.<br>\
        Você precisa atualizar o usuário no Azure Active Directory (Azure AD) quando ele se converte em um cliente pagante.<br>\
        Qual parâmetro da Graph API é usado para alterar a autenticação de senhas únicas para federação?",
        alternatives: [
            { description: "A. resetRedemption", correct: true },
            { description: "B. Status", correct: false },
            { description: "C. userFlowType", correct: false },
            { description: "D. invitedUser", correct: false },
        ]
    },
    {
        id: 643,
        type: "mc",
        text: "Você está desenvolvendo várias APIs hospedadas do Azure API Management (APIM).<br>\
        As APIs têm os seguintes requisitos:<br><br>\
        • Exigir uma chave de assinatura para acessar todas as APIs.<br>\
        • Incluir termos de uso que os assinantes devem aceitar para usar as APIs.<br>\
        • Os administradores devem revisar e aceitar ou rejeitar tentativas de assinatura.<br>\
        • Limitar a contagem de várias assinaturas simultâneas.<br><br>\
        Você precisa implementar as APIs.<br>\
        O que você deve fazer?",
        alternatives: [
            { description: "A. Configure e aplique o controle de versão baseado em cabeçalho.", correct: false },
            { description: "B. Criar e publicar um produto.", correct: true },
            { description: "C. Configurar e aplicar o controle de versão baseado em sequência de consulta.", correct: false },
            { description: "D. Adicione uma nova revisão a todas as APIs. Torne as revisões atuais e adicione uma entrada de log de alterações.", correct: false },
        ]
    },  
    {
        id: 650,
        type: "mc",
        text: "Você está desenvolvendo várias APIs hospedadas do Azure API Management (APIM).<br>\
        Você deve fazer várias alterações pequenas e não destrutivas em uma das APIs. As alterações da API incluem os seguintes requisitos:<br><br>\
        • Não deve interromper os chamadores da API.<br>\
        • Habilite a reversão se encontrar problemas.<br>\
        • Documentado para permitir que os desenvolvedores entendam o que há de novo.<br>\
        • Testado antes da publicação.<br><br>\
        Você precisa atualizar a API.<br>\
        O que você deve fazer?",
        alternatives: [
            { description: "A. Configure e aplique o controle de versão baseado em cabeçalho.", correct: false },
            { description: "B. Criar e publicar um produto.", correct: false },
            { description: "C. Configure e aplique uma política personalizada.", correct: false },
            { description: "D. Adicione uma nova revisão à API.", correct: true },
            { description: "E. Configurar e aplicar o controle de versão baseado em sequência de consulta.", correct: false },
        ]
    },
    {
        id: 656,
        type: "mc",
        text: "Observação: esta pergunta faz parte de uma série de perguntas que apresentam o mesmo cenário. Cada pergunta da série contém uma solução exclusiva que pode atender aos objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\
        Depois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, essas perguntas não aparecerão na tela de revisão.\
        Você está implementando um aplicativo usando o Azure Event Grid para enviar informações quase em tempo real aos clientes.<br><br>\
        Você tem os seguintes requisitos<br>:\
        • Você deve enviar eventos para milhares de clientes que incluem centenas de vários tipos de eventos.<br>\
        • Os eventos devem ser filtrados por tipo de evento antes do processamento.<br>\
        • A autenticação e a autorização devem ser manipuladas usando o Microsoft Entra ID.<br>\
        • Os eventos devem ser publicados em um único ponto de extremidade.<br>\
        Você precisa implementar o Azure Event Grid.<br><br>\
        <b>Solução: publique eventos em um domínio de eventos. Crie um tópico personalizado para cada cliente.</b><br>\
        A solução atende à meta?",
        alternatives: [
            { description: "A. Sim", correct: true },
            { description: "B. Não", correct: false },
        ]
    },
    {
        id: 657,
        type: "mc",
        text: "Observação: esta pergunta faz parte de uma série de perguntas que apresentam o mesmo cenário. Cada pergunta da série contém uma solução exclusiva que pode atender aos objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\
        Depois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, essas perguntas não aparecerão na tela de revisão.\
        Você está implementando um aplicativo usando o Azure Event Grid para enviar informações quase em tempo real aos clientes.<br><br>\
        Você tem os seguintes requisitos<br>:\
        • Você deve enviar eventos para milhares de clientes que incluem centenas de vários tipos de eventos.<br>\
        • Os eventos devem ser filtrados por tipo de evento antes do processamento.<br>\
        • A autenticação e a autorização devem ser manipuladas usando o Microsoft Entra ID.<br>\
        • Os eventos devem ser publicados em um único ponto de extremidade.<br>\
        Você precisa implementar o Azure Event Grid.<br><br>\
        <b>Solução: publique eventos em um tópico personalizado. Crie uma assinatura de evento para cada cliente.</b><br>\
        A solução atende à meta?",
        alternatives: [
            { description: "A. Sim", correct: true },
            { description: "B. Não", correct: false },
        ]
    }, 
    {
        id: 658,
        type: "mc",
        text: "Observação: esta pergunta faz parte de uma série de perguntas que apresentam o mesmo cenário. Cada pergunta da série contém uma solução exclusiva que pode atender aos objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\
        Depois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, essas perguntas não aparecerão na tela de revisão.\
        Você está implementando um aplicativo usando o Azure Event Grid para enviar informações quase em tempo real aos clientes.<br><br>\
        Você tem os seguintes requisitos<br>:\
        • Você deve enviar eventos para milhares de clientes que incluem centenas de vários tipos de eventos.<br>\
        • Os eventos devem ser filtrados por tipo de evento antes do processamento.<br>\
        • A autenticação e a autorização devem ser manipuladas usando o Microsoft Entra ID.<br>\
        • Os eventos devem ser publicados em um único ponto de extremidade.<br>\
        Você precisa implementar o Azure Event Grid.<br><br>\
        <b>Solução: habilite a entrada, crie uma regra de escala TCP e aplique a regra ao aplicativo de contêiner.</b><br>\
        A solução atende à meta?",
        alternatives: [
            { description: "A. Sim", correct: false },
            { description: "B. Não", correct: true },
        ]
    },
    {
        id: 660,
        type: "mc",
        text: "Observação: esta pergunta faz parte de uma série de perguntas que apresentam o mesmo cenário. Cada pergunta da série contém uma solução exclusiva que pode atender aos objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\
        Depois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, essas perguntas não aparecerão na tela de revisão.\
        Você está implementando um aplicativo usando o Azure Event Grid para enviar informações quase em tempo real aos clientes.<br><br>\
        Você tem os seguintes requisitos<br>:\
        • Você deve enviar eventos para milhares de clientes que incluem centenas de vários tipos de eventos.<br>\
        • Os eventos devem ser filtrados por tipo de evento antes do processamento.<br>\
        • A autenticação e a autorização devem ser manipuladas usando o Microsoft Entra ID.<br>\
        • Os eventos devem ser publicados em um único ponto de extremidade.<br>\
        Você precisa implementar o Azure Event Grid.<br><br>\
        <b>Solução: publique eventos em um tópico de parceiro. Crie uma assinatura de evento para cada cliente.</b><br>\
        A solução atende à meta?",
        alternatives: [
            { description: "A. Sim", correct: false },
            { description: "B. Não", correct: true },
        ]
    },
    {
        id: 661,
        type: "mc",
        text: "Observação: esta pergunta faz parte de uma série de perguntas que apresentam o mesmo cenário. Cada pergunta da série contém uma solução exclusiva que pode atender aos objetivos declarados. Alguns conjuntos de perguntas podem ter mais de uma solução correta, enquanto outros podem não ter uma solução correta.\
        Depois de responder a uma pergunta nesta seção, você NÃO poderá retornar a ela. Como resultado, essas perguntas não aparecerão na tela de revisão.\
        Você está implementando um aplicativo usando o Azure Event Grid para enviar informações quase em tempo real aos clientes.<br><br>\
        Você tem os seguintes requisitos<br>:\
        • Você deve enviar eventos para milhares de clientes que incluem centenas de vários tipos de eventos.<br>\
        • Os eventos devem ser filtrados por tipo de evento antes do processamento.<br>\
        • A autenticação e a autorização devem ser manipuladas usando o Microsoft Entra ID.<br>\
        • Os eventos devem ser publicados em um único ponto de extremidade.<br>\
        Você precisa implementar o Azure Event Grid.<br><br>\
        <b>Solução: publique eventos em um tópico do sistema. Crie uma assinatura de evento para cada cliente.</b><br>\
        A solução atende à meta?",
        alternatives: [
            { description: "A. Sim", correct: false },
            { description: "B. Não", correct: true },
        ]
    },                                        
]