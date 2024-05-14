import Swal from 'sweetalert2'


const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });

export  function alertSmallSuccess(message) {
    Toast.fire({
        icon: "success",
        title: message
      })
  }


  
export function alertDetails(coder) {
  Swal.fire({
    title: `${coder.name} ${coder.lastName}`,
    text: `Id: ${coder.id}`,
    text:`Email: ${coder.email}`
  })
}

