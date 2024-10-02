import { useSelector } from "react-redux";

export const ValidationInput = (inputNama, inputNoHP) => {
  const userSelector = useSelector((state) => state.user);
  const names = [];
  const noHPs = [];
  for (i = 0; i < userSelector.users.length; i++) {
    const { id, name, noHP } = userSelector.users[i];
    names.push(name);
    noHPs.push(noHP);
  }

  let isValid = true;
  let message = "Data berhasil ditambahkan!";
  for (i = 0; i < names.length; i++) {
    if (inputNama === names[i]) {
      isValid = false;
      message = `Gagal, ${inputNama} sudah terdaftar!`;
    }
  }
  for (i = 0; i < noHPs.length; i++) {
    if (inputNoHP === noHPs[i]) {
      isValid = false;
      message = `Gagal, nomer ${inputNoHP} sudah terdaftar!`;
    }
  }
  return [isValid, message];
};
