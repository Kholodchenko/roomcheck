type registry = {
  telephoneNumber?: number,
  email?: string,
}

type profile = {
  id: number | string,
  firstName: string,
  secondName: string,
  //здесь в формате математическом для даты нужно но присылать стрингу
  dateOfBirth: string,
  // ссылку на фотку где храним
  img: string | null,
  email: string | null,
  telephoneNumber: string,
}