import Swal from "sweetalert2";

export const handleDelete = async (id) => {

  Swal.fire({
    title: "¿Seguro que quieres eliminar este evento?",
    text: "¡Tendrás que volver a crearlo!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    cancelButtonText: "Cancelar",
    confirmButtonText: "Sí, eliminar evento",
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        const response = await fetch(`http://localhost:4000/api/events/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Evento eliminado exitosamente",
            showConfirmButton: false,
          });
          setTimeout(() => {
            window.location.reload();
          }, 1500);
        } else {
          console.error('Error al intentar eliminar el evento');
         
        }
      } catch (error) {
        console.error('Error de red:', error.message);
      }
    }
  });
};

