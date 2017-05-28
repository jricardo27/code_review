# GOOD.
call_some_function(
    param1,
    param2,
)

# GOOD.
# If the function doesn't expect more parameters, a closing parenthesis `)`
# can be placed at the end of the last parameter.
call_some_function(
    param1,
    param2)

# GOOD.
call_some_function(
    param1, param2)


# BAD.
call_some_function(
    param1, param2
)

# BAD.
call_some_function(
    param1,
    param2
)

# BAD.
call_some_function(param1,
    param2,
)

# BAD.
call_some_function(param1,
    param2)
