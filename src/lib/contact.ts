export const WHATSAPP_NUMBER = "5531990858563";

export const GARCONET_URL =
  "https://painel.garcomonline.com.br/assinar/?plano=garconet-2";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const FORMACAO_WHATSAPP = whatsappLink(
  "Olá! Quero garantir minha vaga na 1ª turma da Formação Gestor de Delivery 360º.",
);

export const ADDRESS_LINES = [
  "Rua Araguari, 358",
  "Barro Preto",
  "Belo Horizonte/MG",
];
