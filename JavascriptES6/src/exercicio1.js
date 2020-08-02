class usuarios {
  constructor(email, senha) {
    (this.email = email), (this.senha = senha);
    this.isAdmin = false;
  }
}
class Admin extends usuarios {
  constructor() {
    super();
  }
}
