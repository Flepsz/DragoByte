// Função assíncrona que realiza uma requisição para obter produtos com base em uma consulta
const fetchProducts = async (query) => {
  // Faz uma requisição para a API do Mercado Livre passando a consulta como parâmetro
  const response = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?q=${query}`
  );

  // Extrai os dados da resposta da requisição
  const data = await response.json();

  // Retorna os resultados dos produtos obtidos
  return data.results;
};

export default fetchProducts;
