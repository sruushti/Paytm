import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
  } from "@material-tailwind/react";
  import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
  } from "@heroicons/react/24/solid";
  
  export function Sidebar() {
    return (
      <Card className="h-[calc(100vh-2rem)] w-full max-w-[12rem] p-4 shadow-xl shadow-blue-gray-900/5 fixed">
        <div className="mb-2 p-4">
          <Typography variant="h5" color="blue-gray">
            Sidebar
          </Typography>
        </div>
        <List>
          <ListItem className="hover:bg-blue-gray-50 cursor-pointer rounded-lg">
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            Dashboard
          </ListItem>
          <ListItem className="hover:bg-blue-gray-50 cursor-pointer rounded-lg">
            <ListItemPrefix>
              <ShoppingBagIcon className="h-5 w-5" />
            </ListItemPrefix>
            E-Commerce
          </ListItem>
          <ListItem className="hover:bg-blue-gray-50 cursor-pointer rounded-lg">
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Inbox
            <ListItemSuffix>
              <Chip
                value="14"
                size="sm"
                variant="ghost"
                color="blue-gray"
                className="rounded-full"
              />
            </ListItemSuffix>
          </ListItem>
          <ListItem className="hover:bg-blue-gray-50 cursor-pointer rounded-lg">
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Profile
          </ListItem>
          <ListItem className="hover:bg-blue-gray-50 cursor-pointer rounded-lg">
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Settings
          </ListItem>
          <ListItem className="hover:bg-blue-gray-50 cursor-pointer rounded-lg">
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </Card>
    );
  }
  