# GOOD
class AmazingBaseClass(TemplateView):
    """Base class for displaying amazing stuff."""

    def amazing_method(self):
        """Do something amazing."""
        pass

    def dispatch(self):
        """Do something amazing with the output."""

        self.amazing_method()


class AmazingView(AmazingBaseClass):
    """Display amazing stuff."""

    template = 'amazing.html'


class NowImAlsoAnAmazingView(AmazingBaseClass):
    """Display some more amazing stuff."""

    template = 'some_more_amazingness.html'
