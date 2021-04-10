# tabela
 Tabela para cálculo de INSS e IRRF.
+
Essa tabela usa do salário bruto inserido pelo Usuário no campo de texto, para calcular o INSS(Imposto sobre o Seguro Social) e o IRRF(Imposto de Renda).
+
Primeiro o dado inicial(salário bruto) tem o INSS calculado, deduzindo a quantia a partir da tabela de alíquotas referentes a quantia. Esse dado é passado para a próxima função: a que calcula o IRRF, calculando a taxa e depois disso subtraindo a parcela a deduzir.
+
Depois disso são somados todos os dados, dando o total da soma de todos os IRRF, INSS e a soma dos salários líquidos, mostrando também o menor e o maior salário.