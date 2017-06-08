# BAD
class AmazingView(TemplateView):
    """Display amazing stuff."""
    template = 'amazing.html'

    def amazing_method(self):
        """Do something amazing."""
        pass

    def dispatch(self):
        """Do something amazing with the output."""

        self.amazing_method()


class NotSoAmazingView(TemplateView):
    """Display amazing stuff."""

    template = 'not_so_amazing.html'

    def amazing_method(self):
        """Do something amazing."""
        pass

    def dispatch(self):
        """Do something amazing with the output."""

        self.amazing_method()
