function(emp) {
    if (emp.favorite == "yes") {
        emit(emp._rev, {
            first_name: emp.first_name,
            last_name: emp.last_name,
            job_title: emp.job_title,
            email: emp.email,
            img: emp.img,
            favorite: emp.favorite
        });
    }
}