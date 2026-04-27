# Bônus Extra: Robô de Produtividade Completo

## Introdução

Este capítulo bônus apresenta um robô de produtividade que integra várias das automações que você aprendeu. Ele vai:

1.  **Organizar seus downloads** por tipo e data.
2.  **Gerar um checklist diário** com base em suas tarefas.
3.  **Fazer backup** de uma pasta importante.

É um exemplo prático de como combinar diferentes scripts para criar uma solução mais robusta e útil no seu dia a dia.

## Pré-requisitos

Certifique-se de ter as bibliotecas `pandas` e `fpdf2` instaladas, caso utilize as funcionalidades de relatório e PDF. Para este exemplo, focaremos nas funcionalidades de organização de arquivos e checklist.

## Exemplo de Código: Robô de Produtividade

```python
from pathlib import Path
import shutil
from datetime import datetime, timedelta

# --- Configurações --- #
PASTA_DOWNLOADS = Path("Downloads_para_organizar") # Crie esta pasta para testar
PASTA_BACKUP_ORIGEM = Path("Meus_Documentos_Importantes") # Crie esta pasta com alguns arquivos
PASTA_BACKUP_DESTINO = Path("Backup_Diario")
PASTA_CHECKLISTS = Path("Meus_Checklists")

ITENS_CHECKLIST = [
    "Ver e-mails importantes",
    "Revisar agenda do dia",
    "Atualizar planilha de projetos",
    "Responder mensagens pendentes",
    "Fazer uma pausa de 15 minutos"
]

# --- Funções de Automação --- #

def organizar_downloads(pasta_origem: Path):
    print(f"\nOrganizando downloads em: {pasta_origem}")
    pasta_origem.mkdir(exist_ok=True)

    for arquivo in pasta_origem.iterdir():
        if arquivo.is_file():
            extensao = arquivo.suffix.lower().replace(".", "")
            if extensao == "":
                extensao = "sem_extensao"

            data_modificacao = datetime.fromtimestamp(arquivo.stat().st_mtime)
            mes_ano = data_modificacao.strftime("%Y-%m")

            destino = pasta_origem / mes_ano / extensao
            destino.mkdir(parents=True, exist_ok=True)

            shutil.move(str(arquivo), str(destino / arquivo.name))
            print(f"  Movido: {arquivo.name} -> {destino / arquivo.name}")
    print("Organização de downloads concluída.")

def criar_checklist_diario(pasta_destino: Path, itens: list[str]):
    print(f"\nCriando checklist diário em: {pasta_destino}")
    pasta_destino.mkdir(exist_ok=True)

    hoje = datetime.now().strftime("%Y-%m-%d")
    arquivo_checklist = pasta_destino / f"checklist_{hoje}.md"

    linhas = [f"# Checklist do Dia {hoje}", ""]
    for item in itens:
        linhas.append(f"- [ ] {item}")
    linhas.append("") # Adiciona uma linha vazia no final

    arquivo_checklist.write_text("\n".join(linhas), encoding="utf-8")
    print(f"  Checklist criado: {arquivo_checklist}")

def fazer_backup(pasta_origem: Path, pasta_destino: Path):
    print(f"\nIniciando backup de: {pasta_origem} para {pasta_destino}")
    pasta_destino.mkdir(exist_ok=True)

    for item in pasta_origem.rglob("*"):
        if item.is_file():
            alvo = pasta_destino / item.relative_to(pasta_origem)
            alvo.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(item, alvo)
            print(f"  Copiado: {item.name}")
    print("Backup concluído.")

# --- Execução do Robô --- #
if __name__ == "__main__":
    print("Iniciando Robô de Produtividade...")

    # 1. Organizar Downloads
    organizar_downloads(PASTA_DOWNLOADS)

    # 2. Criar Checklist Diário
    criar_checklist_diario(PASTA_CHECKLISTS, ITENS_CHECKLIST)

    # 3. Fazer Backup
    fazer_backup(PASTA_BACKUP_ORIGEM, PASTA_BACKUP_DESTINO)

    print("\nRobô de Produtividade finalizado com sucesso!")
```

## Como Usar e Testar

1.  **Crie as pastas de teste**: Antes de rodar, crie as pastas `Downloads_para_organizar` e `Meus_Documentos_Importantes` na mesma localização do seu script. Coloque alguns arquivos de diferentes tipos e datas na pasta `Downloads_para_organizar` e alguns documentos na pasta `Meus_Documentos_Importantes`.
2.  **Salve o código**: Copie o código acima e salve-o como `robo_produtividade.py`.
3.  **Execute**: Abra seu terminal na pasta onde salvou o arquivo e execute: `python robo_produtividade.py`.
4.  **Verifique os resultados**: Observe as pastas `Downloads_para_organizar` (agora organizada), `Meus_Checklists` (com o checklist do dia) e `Backup_Diario` (com a cópia dos seus documentos).

## Desafios Extras

-   **Agendamento**: Use ferramentas como `cron` (Linux/macOS) ou o Agendador de Tarefas (Windows) para rodar este robô automaticamente todos os dias pela manhã.
-   **Notificações**: Adicione uma notificação visual ou sonora ao final da execução (dica: `pyautogui.alert()` ou reproduzir um som).
-   **Integração com E-mail**: Modifique o robô para enviar o checklist diário por e-mail para você.

Este robô é um ponto de partida. Sinta-se à vontade para personalizá-lo e adicionar mais funcionalidades que se encaixem na sua rotina!
