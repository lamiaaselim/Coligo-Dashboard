// components/AppNavbar.tsx
import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container, Image, Dropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaBell, FaComments, FaSearch } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store.ts'; 
import { logout } from '../redux/authSlice.ts'; 

const AppNavbar: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Get the user state from Redux
  const { user } = useSelector((state: RootState) => state.auth);
  const isAuthenticated = !!user;
  const userEmail = user?.email || ''; 

  const handleLogout = () => {
    dispatch(logout()); 
    navigate('/login'); 
  };

  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container fluid>
        {/* Brand/Logo */}
        <Navbar.Brand as={Link} to="/">
          {isAuthenticated ? `Welcome, ${userEmail}` : 'My App'}
        </Navbar.Brand>

        {/* Toggle Button for Mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navbar Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Search Bar */}
          <Form className="d-flex ms-auto me-3" style={{ maxWidth: '400px' }}>
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">
              <FaSearch />
            </Button>
          </Form>

          {/* Notification Icon */}
          {isAuthenticated && (
            <Nav className="me-3">
              <Nav.Link as={Link} to="/notifications">
                <FaBell size={20} />
              </Nav.Link>
            </Nav>
          )}

          {/* Chat Icon */}
          {isAuthenticated && (
            <Nav className="me-3">
              <Nav.Link as={Link} to="/chat">
                <FaComments size={24} title="Chat" />
              </Nav.Link>
            </Nav>
          )}

          {/* User Avatar and Dropdown */}
          {isAuthenticated && (
            <Dropdown align="end">
              <Dropdown.Toggle as={Nav.Link} className="p-0">
                <Image
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKkAAACUCAMAAADf7/luAAAAMFBMVEXh4eGjo6OgoKDk5OTb29uoqKixsbHMzMytra3GxsbBwcHe3t7U1NTX19e2tradnZ3QSE/cAAAD2UlEQVR4nO2c23LjIBBEgeF+0///7YJsx0ls2WCBBmXph7iSysOpBiGYaUzI1NTU1NTU1NRfFwAQ59z6Oa4SXDBR6iwZTSCj0jof6bIwehFbFhq9w4Z6FHAr2Y3yJsak5YP5Cko8cF5YhRoJFbxcnmBetEg/DGs2dBM0+TqMrWBeYF5khkAF+8rQq612AFQw70ET6gCuqgLOLIUNGgpBKQ3IpLJk7Nfxl6icZZP0ioo6VYMoBqVUII5/yQL1zVTEpcrVWJpMRdtZgaqxNJmK9lYFXUmqsUhdHWhCRRr+2sFHHP6qJ38ltTigJFaCUhpxQF3xm/TLU4kzUbmu9lRzHNK6dT9LTNI/Q3qaeepkNSnSs3+e9RRsNSnSDhV89cqPVvepJkXiJFD5OmUSbSd9mj1/OkdVnfjwzlGEVBz384EfD5SEmteUxqz3nKeGUvH44z34V3FahsoozubkLiiun6KXes9Tkz5PnZ8UrKqoK+l3gX/TjxqodcZfbapjGAY0oZKtNh8TigwESnJv30j6a21Nv0kzYI8/+WolW9jak04/FybtaH7eBMQFZaPWQutoVXCDcl51CaCMHUOZmpqampqampr6VGvqmAefpJTKH4GvKWRssB8CcNwbG6UWIm33lyXt/KkQWkZrPHeD0KY9M1dRi/VE8usctf5B6Kg49s4aSLIyLvdw9MaBP/1HTOZiHVayl1bTp6HjJ7SMapu9PZ7TqShKMb9gRVTuWNY1EF8Bedeh0flk52MgvsZaeYyx4IworENvslJhurMCtx8O+08ttO+VhORnZUBuW0x39BW43jE/H1CZ7marbch5Ye2SSQMX23KurLH9DADfbIb+QNWtK+vgd65Mm6i0LeqbnsMu1Kb9CgjdQDNqw46F6zJHv1B1s41AXRj+A9RmHUDelTOrVZ+6s6XtUskfZCJr1SZDWdzB36M2t6e6D36z4T8P6XlG/zzPPiEd36UrqGgFmvYnXUlb7lHe39Ldo6YplY5TtfURpfqOSTFo69ud9ddhSkGb1354p3NU+7gf9EDtc+QH3nwCMNmnNtEctRdoVlPUvne66y9wbKvz9UPVqDbFWO+vHoDQZAlgun8sEZzdXfhh1B5TP1diX1l6OewLUiDtrXZ0JNLe6bhOD/j4ISuj8diELxD/SaeHMemP70mCf4jGvrOTIn3ZEIC3z7+r6bmdwnq0jjQQbiQrWQgWJg1aL/oKC868bvWujV0zRBwhOZszxxn3IYmQcwhWIbv5XZAzCQlXCrYmJTIjEzJB5vzBMJh3AeRECg8h8Jw+GRFxampqampqaur/1D/jNijv0GWRFgAAAABJRU5ErkJggg=="
                  roundedCircle
                  width={40}
                  height={40}
                  alt="User Avatar"
                />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/profile">
                  Profile
                </Dropdown.Item>
                <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}

          {/* Conditional Rendering for Auth Links */}
          {!isAuthenticated && (
            <Nav>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;