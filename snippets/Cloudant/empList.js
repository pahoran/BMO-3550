function(emp) {
    if (emp.first_name && emp.last_name && emp.job_title && emp.email) {
        emit(emp._rev, {
            first_name: emp.first_name,
            last_name: emp.last_name,
            title: emp.job_title,
            email: emp.email,
            img: emp.img,
            favorite: emp.favorite
        });
    }
}