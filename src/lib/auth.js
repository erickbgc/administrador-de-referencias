module.exports = {

    isLoggedIn(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        return res.redirect('/signin');
    },

    isNotLoggedIn(req, res, next){
        if (!req.isAuthenticated()) {
            return next();
        }
        return res.redirect('/profile');
    },

    isAdmin(req, res, next) {
        if (req.user.username == 'admin') {
            return next();
        }
        return res.redirect('/profile');
    },

    isNotAdmin(req, res, next) {
        if (req.user.username != 'admin') {
            return next();
        }
        return res.redirect('/profile');
    }

}