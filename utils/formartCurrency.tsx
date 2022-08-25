function formatCurrency(number: number) {
  return new Intl.NumberFormat('pt-BR', { style: 'decimal', currency: 'BRL' })
    .format(number);
}

export default formatCurrency;