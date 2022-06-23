$(function() {

    $('.viewModalInsert').on('click',function() {

        $('#ModalTittle').html('INSERT DATA');
        
    });

    $('.viewModalEdit').on('click',function() {

        $('#ModalTittle').html('EDIT DATA');

        const id = $(this).data('id');

        $.ajax({
            url: 'http://localhost/phpmvc/public/project/getEdit',
            data: {id : id},
            method: 'post',
            dataType: 'json',
            success: function(data) {
                $('#site').val(data.site);
                $('#owner').val(data.owner);
                $('#category').val(data.category);
            }
        });

    });

});