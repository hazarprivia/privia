const toast = function (text) {
    text = text.toString();
    Java.scheduleOnMainThread(() => {
        Java.use("android.widget.Toast")
            .makeText(Java.use("android.app.ActivityThread").currentApplication().getApplicationContext(), Java.use("java.lang.StringBuilder").$new(text), 1).show();
    });
}
toast("gamer ananı sikeyim")
