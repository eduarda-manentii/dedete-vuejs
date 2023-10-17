new Vue({
  el: '#app',
  data: {
      tableData: [
          ['']
      ],
      initialColumns: 1,
      apiRecord: {}
  },
  methods: {
      adicionarLinha() {
          const novaLinha = Array(this.initialColumns).fill('');
          this.tableData.push(novaLinha);
      },
      adicionarColuna() {
          this.tableData.forEach(item => {
              item.push('');
          });
          this.initialColumns++;
      },
      removerLinha() {
          if (this.tableData.length > 1) {
              this.tableData.pop();
          }
      },
      removerColuna() {
          if (this.initialColumns > 1) {
              this.tableData.forEach(item => {
                  item.pop();
              });
              this.initialColumns--;
          }
      },
      importarRegistro() {
          const config = {
              auth: {
                  username: 'username',
                  password: 'password'
              }
          };

          axios.get('url', config)
              .then(response => {
                  this.apiRecord = response.data;
              })
              .catch(error => {
                  console.error('Erro ao importar registro da API:', error);
              });
      }
  }
});
