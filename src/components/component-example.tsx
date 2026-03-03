"use client";

import * as React from "react";

import { Example, ExampleWrapper } from "@/components/example";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";
import { DatePicker } from "@/components/ui/date-picker";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Label } from "@/components/ui/label";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  DataTable,
  DataTableColumnHeader,
  DataTableFacetedFilter,
  DataTableRowActions,
  DataTableViewOptions,
  type ColumnDef,
  type FacetedFilterOption,
  type RowAction,
} from "@/components/data-table";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import type { Table as TanstackTable } from "@tanstack/react-table";
import {
  AlertCircleIcon,
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  BellIcon,
  BluetoothIcon,
  BoldIcon,
  CalendarIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  CircleIcon,
  CircleDotIcon,
  CircleOffIcon,
  CreditCardIcon,
  DownloadIcon,
  EyeIcon,
  FileCodeIcon,
  FileIcon,
  FileTextIcon,
  FolderIcon,
  FolderOpenIcon,
  FolderSearchIcon,
  HelpCircleIcon,
  InfoIcon,
  ItalicIcon,
  KeyboardIcon,
  LanguagesIcon,
  LayoutIcon,
  LogOutIcon,
  MailIcon,
  MonitorIcon,
  MoonIcon,
  MoreHorizontalIcon,
  MoreVerticalIcon,
  PaletteIcon,
  PanelLeftIcon,
  PlusIcon,
  SaveIcon,
  SettingsIcon,
  ShieldIcon,
  SunIcon,
  UnderlineIcon,
  UserIcon,
  XIcon,
} from "lucide-react";

export function ComponentExample() {
  return (
    <ExampleWrapper>
      {/* Section 1: Cards & Containers */}
      <CardExample />
      <FormExample />

      {/* Section 2: Data Display */}
      <TableExample />
      <DataTableAdvancedExample />
      <StackedBarChartExample />
      <GroupedBarChartExample />
      <AvatarExample />

      {/* Section 3: Navigation */}
      <TabsExample />
      <BreadcrumbExample />
      <PaginationExample />

      {/* Section 4: Overlays & Dialogs */}
      <DialogExample />
      <SheetExample />
      <DrawerExample />
      <DatePickerExample />
      <PopoverExample />
      <HoverCardExample />
      <TooltipExample />

      {/* Section 5: Form Controls */}
      <CheckboxRadioExample />
      <SwitchSliderExample />
      <InputOTPExample />

      {/* Section 6: Toggle & Buttons */}
      <ToggleExample />
      <ButtonVariantsExample />

      {/* Section 7: Disclosure */}
      <AccordionExample />
      <CollapsibleExample />

      {/* Section 8: Feedback */}
      <AlertExample />
      <ProgressExample />
      <SkeletonExample />

      {/* Section 9: Layout */}
      <ScrollAreaExample />
      <SeparatorExample />

      {/* Section 10: Date & Calendar */}
      <CalendarExample />
    </ExampleWrapper>
  );
}

// =============================================================================
// CARDS & CONTAINERS
// =============================================================================

function CardExample() {
  return (
    <Example title="Card" className="items-center justify-center">
      <Card className="relative w-full max-w-sm overflow-hidden pt-0">
        <div className="bg-primary absolute inset-0 z-30 aspect-video opacity-50 mix-blend-color" />
        <img
          src="https://images.unsplash.com/photo-1604076850742-4c7221f3101b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Photo by mymind on Unsplash"
          title="Photo by mymind on Unsplash"
          className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale"
        />
        <CardHeader>
          <CardTitle>Observability Plus is replacing Monitoring</CardTitle>
          <CardDescription>
            Switch to the improved way to explore your data, with natural
            language. Monitoring will no longer be available on the Pro plan in
            November, 2025
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <AlertDialog>
            <AlertDialogTrigger render={<Button />}>
              <PlusIcon data-icon="inline-start" />
              Show Dialog
            </AlertDialogTrigger>
            <AlertDialogContent size="sm">
              <AlertDialogHeader>
                <AlertDialogMedia>
                  <BluetoothIcon />
                </AlertDialogMedia>
                <AlertDialogTitle>Allow accessory to connect?</AlertDialogTitle>
                <AlertDialogDescription>
                  Do you want to allow the USB accessory to connect to this
                  device?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Don&apos;t allow</AlertDialogCancel>
                <AlertDialogAction>Allow</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <Badge variant="secondary" className="ml-auto">
            Warning
          </Badge>
        </CardFooter>
      </Card>
    </Example>
  );
}

const frameworks = [
  "Next.js",
  "SvelteKit",
  "Nuxt.js",
  "Remix",
  "Astro",
] as const;

const roleItems = [
  { label: "Developer", value: "developer" },
  { label: "Designer", value: "designer" },
  { label: "Manager", value: "manager" },
  { label: "Other", value: "other" },
];

function FormExample() {
  const [notifications, setNotifications] = React.useState({
    email: true,
    sms: false,
    push: true,
  });
  const [theme, setTheme] = React.useState("light");

  return (
    <Example title="Form">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>User Information</CardTitle>
          <CardDescription>Please fill in your details below</CardDescription>
          <CardAction>
            <DropdownMenu>
              <DropdownMenuTrigger
                render={<Button variant="ghost" size="icon" />}
              >
                <MoreVerticalIcon />
                <span className="sr-only">More options</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuGroup>
                  <DropdownMenuLabel>File</DropdownMenuLabel>
                  <DropdownMenuItem>
                    <FileIcon />
                    New File
                    <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <FolderIcon />
                    New Folder
                    <DropdownMenuShortcut>⇧⌘N</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <FolderOpenIcon />
                      Open Recent
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuGroup>
                          <DropdownMenuLabel>Recent Projects</DropdownMenuLabel>
                          <DropdownMenuItem>
                            <FileCodeIcon />
                            Project Alpha
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <FileCodeIcon />
                            Project Beta
                          </DropdownMenuItem>
                          <DropdownMenuSub>
                            <DropdownMenuSubTrigger>
                              <MoreHorizontalIcon />
                              More Projects
                            </DropdownMenuSubTrigger>
                            <DropdownMenuPortal>
                              <DropdownMenuSubContent>
                                <DropdownMenuItem>
                                  <FileCodeIcon />
                                  Project Gamma
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <FileCodeIcon />
                                  Project Delta
                                </DropdownMenuItem>
                              </DropdownMenuSubContent>
                            </DropdownMenuPortal>
                          </DropdownMenuSub>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                          <DropdownMenuItem>
                            <FolderSearchIcon />
                            Browse...
                          </DropdownMenuItem>
                        </DropdownMenuGroup>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <SaveIcon />
                    Save
                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <DownloadIcon />
                    Export
                    <DropdownMenuShortcut>⇧⌘E</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuLabel>View</DropdownMenuLabel>
                  <DropdownMenuCheckboxItem
                    checked={notifications.email}
                    onCheckedChange={(checked: boolean) =>
                      setNotifications({
                        ...notifications,
                        email: checked === true,
                      })
                    }
                  >
                    <EyeIcon />
                    Show Sidebar
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={notifications.sms}
                    onCheckedChange={(checked: boolean) =>
                      setNotifications({
                        ...notifications,
                        sms: checked === true,
                      })
                    }
                  >
                    <LayoutIcon />
                    Show Status Bar
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <PaletteIcon />
                      Theme
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuGroup>
                          <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                          <DropdownMenuRadioGroup
                            value={theme}
                            onValueChange={setTheme}
                          >
                            <DropdownMenuRadioItem value="light">
                              <SunIcon />
                              Light
                            </DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="dark">
                              <MoonIcon />
                              Dark
                            </DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="system">
                              <MonitorIcon />
                              System
                            </DropdownMenuRadioItem>
                          </DropdownMenuRadioGroup>
                        </DropdownMenuGroup>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuLabel>Account</DropdownMenuLabel>
                  <DropdownMenuItem>
                    <UserIcon />
                    Profile
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CreditCardIcon />
                    Billing
                  </DropdownMenuItem>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <SettingsIcon />
                      Settings
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuGroup>
                          <DropdownMenuLabel>Preferences</DropdownMenuLabel>
                          <DropdownMenuItem>
                            <KeyboardIcon />
                            Keyboard Shortcuts
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <LanguagesIcon />
                            Language
                          </DropdownMenuItem>
                          <DropdownMenuSub>
                            <DropdownMenuSubTrigger>
                              <BellIcon />
                              Notifications
                            </DropdownMenuSubTrigger>
                            <DropdownMenuPortal>
                              <DropdownMenuSubContent>
                                <DropdownMenuGroup>
                                  <DropdownMenuLabel>
                                    Notification Types
                                  </DropdownMenuLabel>
                                  <DropdownMenuCheckboxItem
                                    checked={notifications.push}
                                    onCheckedChange={(checked: boolean) =>
                                      setNotifications({
                                        ...notifications,
                                        push: checked === true,
                                      })
                                    }
                                  >
                                    <BellIcon />
                                    Push Notifications
                                  </DropdownMenuCheckboxItem>
                                  <DropdownMenuCheckboxItem
                                    checked={notifications.email}
                                    onCheckedChange={(checked: boolean) =>
                                      setNotifications({
                                        ...notifications,
                                        email: checked === true,
                                      })
                                    }
                                  >
                                    <MailIcon />
                                    Email Notifications
                                  </DropdownMenuCheckboxItem>
                                </DropdownMenuGroup>
                              </DropdownMenuSubContent>
                            </DropdownMenuPortal>
                          </DropdownMenuSub>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                          <DropdownMenuItem>
                            <ShieldIcon />
                            Privacy & Security
                          </DropdownMenuItem>
                        </DropdownMenuGroup>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <HelpCircleIcon />
                    Help & Support
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <FileTextIcon />
                    Documentation
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem variant="destructive">
                    <LogOutIcon />
                    Sign Out
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form>
            <FieldGroup>
              <div className="grid grid-cols-2 gap-4">
                <Field>
                  <FieldLabel htmlFor="small-form-name">Name</FieldLabel>
                  <Input
                    id="small-form-name"
                    placeholder="Enter your name"
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="small-form-role">Role</FieldLabel>
                  <Select items={roleItems} defaultValue={null}>
                    <SelectTrigger id="small-form-role">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {roleItems.map((item) => (
                          <SelectItem key={item.value} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Field>
              </div>
              <Field>
                <FieldLabel htmlFor="small-form-framework">
                  Framework
                </FieldLabel>
                <Combobox items={frameworks}>
                  <ComboboxInput
                    id="small-form-framework"
                    placeholder="Select a framework"
                    required
                  />
                  <ComboboxContent>
                    <ComboboxEmpty>No frameworks found.</ComboboxEmpty>
                    <ComboboxList>
                      {(item: string) => (
                        <ComboboxItem key={item} value={item}>
                          {item}
                        </ComboboxItem>
                      )}
                    </ComboboxList>
                  </ComboboxContent>
                </Combobox>
              </Field>
              <Field>
                <FieldLabel htmlFor="small-form-comments">Comments</FieldLabel>
                <Textarea
                  id="small-form-comments"
                  placeholder="Add any additional comments"
                />
              </Field>
              <Field orientation="horizontal">
                <Button type="submit">Submit</Button>
                <Button variant="outline" type="button">
                  Cancel
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </Example>
  );
}

// =============================================================================
// DATA DISPLAY
// =============================================================================

const invoices = [
  {
    invoice: "INV001",
    status: "Paid",
    method: "Credit Card",
    amount: "$250.00",
  },
  { invoice: "INV002", status: "Pending", method: "PayPal", amount: "$150.00" },
  {
    invoice: "INV003",
    status: "Unpaid",
    method: "Bank Transfer",
    amount: "$350.00",
  },
  {
    invoice: "INV004",
    status: "Paid",
    method: "Credit Card",
    amount: "$450.00",
  },
  { invoice: "INV005", status: "Paid", method: "PayPal", amount: "$550.00" },
];

function TableExample() {
  return (
    <Example title="Table" containerClassName="md:col-span-2">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Recent Invoices</CardTitle>
          <CardDescription>A list of your recent invoices.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.invoice}>
                  <TableCell className="font-medium">
                    {invoice.invoice}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        invoice.status === "Paid"
                          ? "default"
                          : invoice.status === "Pending"
                            ? "secondary"
                            : "destructive"
                      }
                    >
                      {invoice.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{invoice.method}</TableCell>
                  <TableCell className="text-right">{invoice.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </Example>
  );
}

// =============================================================================
// ADVANCED DATA TABLE (with TanStack Table)
// =============================================================================

interface Task {
  id: string;
  title: string;
  status: "backlog" | "todo" | "in-progress" | "done" | "canceled";
  priority: "low" | "medium" | "high";
  label: "bug" | "feature" | "documentation";
}

const taskStatuses: FacetedFilterOption[] = [
  { value: "backlog", label: "Backlog", icon: HelpCircleIcon },
  { value: "todo", label: "Todo", icon: CircleIcon },
  { value: "in-progress", label: "In Progress", icon: CircleDotIcon },
  { value: "done", label: "Done", icon: CheckCircleIcon },
  { value: "canceled", label: "Canceled", icon: CircleOffIcon },
];

const taskPriorities: FacetedFilterOption[] = [
  { value: "low", label: "Low", icon: ArrowDownIcon },
  { value: "medium", label: "Medium", icon: ArrowRightIcon },
  { value: "high", label: "High", icon: ArrowUpIcon },
];

const taskLabels: FacetedFilterOption[] = [
  { value: "bug", label: "Bug" },
  { value: "feature", label: "Feature" },
  { value: "documentation", label: "Documentation" },
];

const sampleTasks: Task[] = [
  {
    id: "TASK-8782",
    title: "Compress the program without quantifying the SSD",
    status: "in-progress",
    priority: "medium",
    label: "documentation",
  },
  {
    id: "TASK-7878",
    title: "Calculate the EXE feed to index the pixel",
    status: "backlog",
    priority: "medium",
    label: "documentation",
  },
  {
    id: "TASK-7839",
    title: "Bypass the neural TCP card for optimization",
    status: "todo",
    priority: "high",
    label: "bug",
  },
  {
    id: "TASK-5562",
    title: "The SAS interface is down, bypass the sensor",
    status: "backlog",
    priority: "medium",
    label: "feature",
  },
  {
    id: "TASK-8686",
    title: "Parse the wireless SSL protocol for the API",
    status: "canceled",
    priority: "medium",
    label: "feature",
  },
  {
    id: "TASK-1280",
    title: "Use the digital TLS panel to transmit data",
    status: "done",
    priority: "high",
    label: "bug",
  },
  {
    id: "TASK-7262",
    title: "The UTF8 application needs neural bandwidth",
    status: "done",
    priority: "high",
    label: "feature",
  },
  {
    id: "TASK-1138",
    title: "Quantify the 1080p driver for performance",
    status: "in-progress",
    priority: "medium",
    label: "feature",
  },
  {
    id: "TASK-7184",
    title: "Program the back-end THX pixel system",
    status: "todo",
    priority: "low",
    label: "feature",
  },
  {
    id: "TASK-5160",
    title: "Navigate the back-end bus calculation",
    status: "in-progress",
    priority: "high",
    label: "documentation",
  },
  {
    id: "TASK-4521",
    title: "Optimize the cloud-based firewall protocol",
    status: "todo",
    priority: "high",
    label: "feature",
  },
  {
    id: "TASK-3847",
    title: "Quantify the 4K BIOS application transmission",
    status: "in-progress",
    priority: "medium",
    label: "bug",
  },
  {
    id: "TASK-9201",
    title: "Parse the virtual COM interface indexing",
    status: "backlog",
    priority: "low",
    label: "documentation",
  },
  {
    id: "TASK-6543",
    title: "Bypass the XML feed bootstrap protocol",
    status: "done",
    priority: "high",
    label: "feature",
  },
  {
    id: "TASK-2789",
    title: "Synthesize the multi-byte PCI bus",
    status: "canceled",
    priority: "medium",
    label: "bug",
  },
  {
    id: "TASK-7654",
    title: "Override the neural bandwidth sensor",
    status: "in-progress",
    priority: "low",
    label: "feature",
  },
  {
    id: "TASK-5432",
    title: "Parse the digital TCP panel interface",
    status: "backlog",
    priority: "medium",
    label: "documentation",
  },
  {
    id: "TASK-8901",
    title: "Transmit the optical JSON protocol gateway",
    status: "todo",
    priority: "high",
    label: "bug",
  },
  {
    id: "TASK-3211",
    title: "Execute the virtual bus with HTML panel",
    status: "done",
    priority: "medium",
    label: "feature",
  },
  {
    id: "TASK-6789",
    title: "Implement the back-end SSL encryption",
    status: "in-progress",
    priority: "high",
    label: "documentation",
  },
  {
    id: "TASK-4098",
    title: "Quantify the 8K processor calculation",
    status: "backlog",
    priority: "medium",
    label: "feature",
  },
  {
    id: "TASK-7215",
    title: "Compress the SAN storage with API gateway",
    status: "done",
    priority: "low",
    label: "bug",
  },
  {
    id: "TASK-5634",
    title: "Hash the multi-threaded pixel SMTP feed",
    status: "canceled",
    priority: "medium",
    label: "documentation",
  },
  {
    id: "TASK-9876",
    title: "Bypass the optical USB hub connection",
    status: "todo",
    priority: "high",
    label: "feature",
  },
  {
    id: "TASK-2143",
    title: "Parse the virtual WAN bandwidth stability",
    status: "in-progress",
    priority: "medium",
    label: "bug",
  },
  {
    id: "TASK-8765",
    title: "Synthesize the quantum DNS protocol matrix",
    status: "backlog",
    priority: "low",
    label: "documentation",
  },
  {
    id: "TASK-3456",
    title: "Transmit the multi-byte system via VLAN",
    status: "done",
    priority: "high",
    label: "feature",
  },
  {
    id: "TASK-7012",
    title: "Override the neural network architecture",
    status: "in-progress",
    priority: "medium",
    label: "bug",
  },
  {
    id: "TASK-4382",
    title: "Index the online protocol middleware layer",
    status: "backlog",
    priority: "high",
    label: "documentation",
  },
];

function createTaskColumns(): ColumnDef<Task>[] {
  return [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(value: boolean) =>
            table.toggleAllPageRowsSelected(!!value)
          }
          aria-label="Select all"
          className="translate-y-0.5"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value: boolean) => row.toggleSelected(!!value)}
          aria-label="Select row"
          className="translate-y-0.5"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "id",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Task" />
      ),
      cell: ({ row }) => (
        <div className="w-20 font-mono text-xs">{row.getValue("id")}</div>
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "title",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Title" />
      ),
      cell: ({ row }) => {
        const label = taskLabels.find((l) => l.value === row.original.label);
        return (
          <div className="flex gap-2">
            {label && <Badge variant="outline">{label.label}</Badge>}
            <span className="max-w-[300px] truncate font-medium">
              {row.getValue("title")}
            </span>
          </div>
        );
      },
    },
    {
      accessorKey: "status",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Status" />
      ),
      cell: ({ row }) => {
        const status = taskStatuses.find(
          (s) => s.value === row.getValue("status"),
        );
        if (!status) return null;
        return (
          <div className="flex w-[120px] items-center gap-2">
            {status.icon && (
              <status.icon className="text-muted-foreground size-4" />
            )}
            <span>{status.label}</span>
          </div>
        );
      },
      filterFn: (row, id, value) => value.includes(row.getValue(id)),
    },
    {
      accessorKey: "priority",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Priority" />
      ),
      cell: ({ row }) => {
        const priority = taskPriorities.find(
          (p) => p.value === row.getValue("priority"),
        );
        if (!priority) return null;
        return (
          <div className="flex items-center gap-2">
            {priority.icon && (
              <priority.icon className="text-muted-foreground size-4" />
            )}
            <span>{priority.label}</span>
          </div>
        );
      },
      filterFn: (row, id, value) => value.includes(row.getValue(id)),
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const actions: RowAction[] = [
          { label: "Edit", onClick: () => console.log("Edit", row.original) },
          {
            label: "Make a copy",
            onClick: () => console.log("Copy", row.original),
          },
          {
            label: "Delete",
            onClick: () => console.log("Delete", row.original),
            variant: "destructive",
            separator: true,
          },
        ];
        return <DataTableRowActions actions={actions} />;
      },
    },
  ];
}

function TasksToolbar({ table }: { table: TanstackTable<Task> }) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 flex-wrap items-center gap-2">
        <Input
          placeholder="Filter tasks..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {table.getColumn("status") && (
          <DataTableFacetedFilter
            column={table.getColumn("status")}
            title="Status"
            options={taskStatuses}
          />
        )}
        {table.getColumn("priority") && (
          <DataTableFacetedFilter
            column={table.getColumn("priority")}
            title="Priority"
            options={taskPriorities}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => table.resetColumnFilters()}
          >
            Reset
            <XIcon />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}

function DataTableAdvancedExample() {
  const columns = React.useMemo(() => createTaskColumns(), []);

  return (
    <Example title="DataTable (Advanced)" containerClassName="md:col-span-2">
      <div className="w-full">
        <DataTable
          columns={columns}
          data={sampleTasks}
          toolbar={(table) => (
            <TasksToolbar table={table as TanstackTable<Task>} />
          )}
          defaultPageSize={10}
        />
      </div>
    </Example>
  );
}

// =============================================================================
// CHARTS
// =============================================================================

// Stacked Bar Chart - Invoice due dates
const invoiceDueData = [
  { period: "Overdue", overdue: 1200, upcoming: 0 },
  { period: "Due this week", overdue: 450, upcoming: 1800 },
  { period: "24 Jun - 30 Jun", overdue: 0, upcoming: 3600 },
  { period: "1 Jul - 7 Jul", overdue: 0, upcoming: 1100 },
  { period: "From 8 Jul", overdue: 0, upcoming: 800 },
];

const stackedChartConfig = {
  overdue: {
    label: "Overdue",
    color: "var(--color-destructive)",
  },
  upcoming: {
    label: "Upcoming",
    color: "var(--color-chart-1)",
  },
} satisfies ChartConfig;

function StackedBarChartExample() {
  return (
    <Example title="Stacked Bar Chart">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Invoice Due Dates</CardTitle>
          <CardDescription>
            Overview of invoices by due date with overdue amounts highlighted
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={stackedChartConfig}
            className="h-[300px] w-full"
          >
            <BarChart data={invoiceDueData} accessibilityLayer>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="period"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tick={{ fontSize: 12 }}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickFormatter={(value: number) => `${value / 1000}k`}
              />
              <ChartTooltip content={<ChartTooltipContent />} cursor={false} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar dataKey="overdue" stackId="a" fill="var(--color-overdue)" />
              <Bar
                dataKey="upcoming"
                stackId="a"
                fill="var(--color-upcoming)"
              />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </Example>
  );
}

// Grouped Bar Chart - Cash flow
const cashFlowData = [
  { month: "Jan", cashIn: 85000, cashOut: 78000 },
  { month: "Feb", cashIn: 245000, cashOut: 165000 },
  { month: "Mar", cashIn: 142000, cashOut: 45000 },
  { month: "Apr", cashIn: 195000, cashOut: 112000 },
  { month: "May", cashIn: 78000, cashOut: 42000 },
  { month: "Jun", cashIn: 210000, cashOut: 158000 },
];

const groupedChartConfig = {
  cashIn: {
    label: "Cash in",
    color: "var(--color-chart-4)",
  },
  cashOut: {
    label: "Cash out",
    color: "var(--color-chart-1)",
  },
} satisfies ChartConfig;

function GroupedBarChartExample() {
  return (
    <Example title="Grouped Bar Chart">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Cash Flow</CardTitle>
          <CardDescription>
            Monthly cash in vs cash out comparison
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={groupedChartConfig}
            className="h-[300px] w-full"
          >
            <BarChart data={cashFlowData} accessibilityLayer>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickFormatter={(value: number) => `${value / 1000}k`}
              />
              <ChartTooltip content={<ChartTooltipContent />} cursor={false} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar dataKey="cashIn" fill="var(--color-cashIn)" />
              <Bar dataKey="cashOut" fill="var(--color-cashOut)" />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </Example>
  );
}

function DatePickerExample() {
  return (
    <Example title="Date Picker">
      <DatePicker />
    </Example>
  );
}

function AvatarExample() {
  return (
    <Example title="Avatar">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Team Members</CardTitle>
          <CardDescription>People with access to this project.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">shadcn</p>
              <p className="text-muted-foreground text-xs">m@example.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Avatar size="lg">
              <AvatarImage src="https://github.com/vercel.png" alt="Vercel" />
              <AvatarFallback>V</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">Vercel Team</p>
              <p className="text-muted-foreground text-xs">team@vercel.com</p>
            </div>
          </div>

          <div>
            <p className="text-muted-foreground mb-2 text-xs">Avatar Group</p>
            <AvatarGroup>
              <Avatar size="sm">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar size="sm">
                <AvatarImage src="https://github.com/vercel.png" />
                <AvatarFallback>V</AvatarFallback>
              </Avatar>
              <Avatar size="sm">
                <AvatarFallback>+3</AvatarFallback>
              </Avatar>
            </AvatarGroup>
          </div>
        </CardContent>
      </Card>
    </Example>
  );
}

// =============================================================================
// NAVIGATION
// =============================================================================

function TabsExample() {
  return (
    <Example title="Tabs">
      <Tabs defaultValue="account" className="w-full max-w-md">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when you&apos;re
                done.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Field>
                <FieldLabel htmlFor="name">Name</FieldLabel>
                <Input id="name" defaultValue="Pedro Duarte" />
              </Field>
            </CardContent>
            <CardFooter>
              <Button>Save changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you&apos;ll be logged
                out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Field>
                <FieldLabel htmlFor="current">Current password</FieldLabel>
                <Input id="current" type="password" />
              </Field>
              <Field>
                <FieldLabel htmlFor="new">New password</FieldLabel>
                <Input id="new" type="password" />
              </Field>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Settings</CardTitle>
              <CardDescription>
                Manage your account settings and preferences.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Configure your notification preferences, privacy settings, and
                more.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </Example>
  );
}

function BreadcrumbExample() {
  return (
    <Example title="Breadcrumb">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Components</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </Example>
  );
}

function PaginationExample() {
  return (
    <Example title="Pagination">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious size="icon" href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink size="icon" href="#">
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink size="icon" href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink size="icon" href="#">
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext size="icon" href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </Example>
  );
}

// =============================================================================
// OVERLAYS & DIALOGS
// =============================================================================

function DialogExample() {
  return (
    <Example title="Dialog">
      <Dialog>
        <DialogTrigger render={<Button variant="outline" />}>
          Open Dialog
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <Field>
              <FieldLabel htmlFor="dialog-name">Name</FieldLabel>
              <Input id="dialog-name" defaultValue="Pedro Duarte" />
            </Field>
            <Field>
              <FieldLabel htmlFor="dialog-username">Username</FieldLabel>
              <Input id="dialog-username" defaultValue="@peduarte" />
            </Field>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Example>
  );
}

function SheetExample() {
  return (
    <Example title="Sheet">
      <div className="flex gap-2">
        <Sheet>
          <SheetTrigger render={<Button variant="outline" />}>
            <PanelLeftIcon data-icon="inline-start" />
            Open Sheet
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit Profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you&apos;re
                done.
              </SheetDescription>
            </SheetHeader>
            <div className="space-y-4 p-4">
              <Field>
                <FieldLabel htmlFor="sheet-name">Name</FieldLabel>
                <Input id="sheet-name" defaultValue="Pedro Duarte" />
              </Field>
              <Field>
                <FieldLabel htmlFor="sheet-email">Email</FieldLabel>
                <Input id="sheet-email" defaultValue="pedro@example.com" />
              </Field>
            </div>
            <SheetFooter>
              <Button>Save changes</Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </Example>
  );
}

function DrawerExample() {
  return (
    <Example title="Drawer">
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline">Open Drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Move Goal</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4">
            <div className="flex items-center justify-center space-x-2">
              <Button variant="outline" size="icon">
                -
              </Button>
              <div className="flex-1 text-center">
                <div className="text-5xl font-bold tracking-tighter">350</div>
                <div className="text-muted-foreground text-xs uppercase">
                  Calories/day
                </div>
              </div>
              <Button variant="outline" size="icon">
                +
              </Button>
            </div>
          </div>
          <DrawerFooter className="w-full max-w-64 mx-auto">
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Example>
  );
}

function PopoverExample() {
  return (
    <Example title="Popover">
      <Popover>
        <PopoverTrigger render={<Button variant="outline" />}>
          Open Popover
        </PopoverTrigger>
        <PopoverContent align="start">
          <PopoverHeader>
            <PopoverTitle>Dimensions</PopoverTitle>
            <PopoverDescription>
              Set the dimensions for the layer.
            </PopoverDescription>
          </PopoverHeader>
          <div className="grid gap-4">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Width</Label>
              <Input id="width" defaultValue="100%" className="col-span-2" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Height</Label>
              <Input id="height" defaultValue="25px" className="col-span-2" />
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </Example>
  );
}

function HoverCardExample() {
  return (
    <Example title="HoverCard">
      <HoverCard>
        <HoverCardTrigger render={<Button variant="link" />}>
          @nextjs
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex justify-between space-x-4">
            <Avatar>
              <AvatarImage src="https://github.com/vercel.png" />
              <AvatarFallback>VC</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">@nextjs</h4>
              <p className="text-sm">
                The React Framework – created and maintained by @vercel.
              </p>
              <div className="text-muted-foreground flex items-center pt-2">
                <CalendarIcon className="mr-2 size-4" />
                <span className="text-xs">Joined December 2021</span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </Example>
  );
}

function TooltipExample() {
  return (
    <Example title="Tooltip">
      <div className="flex gap-4">
        <Tooltip>
          <TooltipTrigger render={<Button variant="outline" size="icon" />}>
            <PlusIcon />
          </TooltipTrigger>
          <TooltipContent>
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger render={<Button variant="outline" size="icon" />}>
            <SettingsIcon />
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>Settings</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger render={<Button variant="outline" size="icon" />}>
            <UserIcon />
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p>Profile</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </Example>
  );
}

// =============================================================================
// FORM CONTROLS
// =============================================================================

function CheckboxRadioExample() {
  return (
    <Example title="Checkbox & Radio">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>
            Configure how you receive notifications.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <p className="text-sm font-medium">Email Notifications</p>
            <div className="flex items-center space-x-2">
              <Checkbox id="marketing" />
              <Label htmlFor="marketing">Marketing emails</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="security" defaultChecked />
              <Label htmlFor="security">Security emails</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="updates" />
              <Label htmlFor="updates">Product updates</Label>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <p className="text-sm font-medium">Notification Type</p>
            <RadioGroup defaultValue="all">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="all" id="all" />
                <Label htmlFor="all">All notifications</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="mentions" id="mentions" />
                <Label htmlFor="mentions">Mentions only</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="none" id="none" />
                <Label htmlFor="none">None</Label>
              </div>
            </RadioGroup>
          </div>
        </CardContent>
      </Card>
    </Example>
  );
}

function SwitchSliderExample() {
  const [volume, setVolume] = React.useState<number[]>([50]);

  return (
    <Example title="Switch & Slider">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Preferences</CardTitle>
          <CardDescription>Manage your app preferences.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Airplane Mode</Label>
              <p className="text-muted-foreground text-xs">
                Disable all wireless connections
              </p>
            </div>
            <Switch />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Dark Mode</Label>
              <p className="text-muted-foreground text-xs">Use dark theme</p>
            </div>
            <Switch defaultChecked />
          </div>

          <Separator />

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>Volume</Label>
              <span className="text-muted-foreground text-sm">{volume}%</span>
            </div>
            <Slider
              value={volume}
              onValueChange={(value: number | readonly number[]) =>
                setVolume(Array.isArray(value) ? [...value] : [value])
              }
              max={100}
              step={1}
            />
          </div>
        </CardContent>
      </Card>
    </Example>
  );
}

function InputOTPExample() {
  return (
    <Example title="Input OTP">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Verification Code</CardTitle>
          <CardDescription>
            Enter the 6-digit code sent to your phone.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <InputOTP maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </CardContent>
        <CardFooter className="justify-center">
          <Button variant="link" className="text-xs">
            Didn&apos;t receive a code? Resend
          </Button>
        </CardFooter>
      </Card>
    </Example>
  );
}

// =============================================================================
// TOGGLE & BUTTONS
// =============================================================================

function ToggleExample() {
  return (
    <Example title="Toggle & Toggle Group">
      <div className="space-y-6">
        <div className="space-y-2">
          <p className="text-muted-foreground text-xs">Single Toggle</p>
          <div className="flex gap-2">
            <Toggle aria-label="Toggle bold">
              <BoldIcon />
            </Toggle>
            <Toggle aria-label="Toggle italic">
              <ItalicIcon />
            </Toggle>
            <Toggle aria-label="Toggle underline">
              <UnderlineIcon />
            </Toggle>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-muted-foreground text-xs">Toggle Group</p>
          <ToggleGroup variant="outline">
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
              <BoldIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
              <ItalicIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Toggle underline">
              <UnderlineIcon />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
    </Example>
  );
}

function ButtonVariantsExample() {
  return (
    <Example title="Button Variants">
      <div className="flex flex-wrap gap-2">
        <Button>Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
        <Button variant="destructive">Destructive</Button>
      </div>
      <div className="flex flex-wrap gap-2">
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
        <Button size="icon">
          <PlusIcon />
        </Button>
      </div>
    </Example>
  );
}

// =============================================================================
// DISCLOSURE
// =============================================================================

function AccordionExample() {
  return (
    <Example title="Accordion">
      <Accordion className="w-full max-w-md">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that match the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Example>
  );
}

function CollapsibleExample() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Example title="Collapsible">
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-full max-w-md space-y-2"
      >
        <div className="flex items-center justify-between space-x-4 rounded-md border px-4 py-2">
          <h4 className="text-sm font-semibold">
            @peduarte starred 3 repositories
          </h4>
          <CollapsibleTrigger render={<Button variant="ghost" size="sm" />}>
            <ChevronDownIcon
              className={`size-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
            />
            <span className="sr-only">Toggle</span>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border px-4 py-2 text-sm">
            @radix-ui/primitives
          </div>
          <div className="rounded-md border px-4 py-2 text-sm">
            @radix-ui/colors
          </div>
          <div className="rounded-md border px-4 py-2 text-sm">
            @stitches/react
          </div>
        </CollapsibleContent>
      </Collapsible>
    </Example>
  );
}

// =============================================================================
// FEEDBACK
// =============================================================================

function AlertExample() {
  return (
    <Example title="Alert">
      <div className="w-full max-w-md space-y-4">
        <Alert>
          <InfoIcon />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components to your app using the cli.
          </AlertDescription>
        </Alert>

        <Alert variant="destructive">
          <AlertCircleIcon />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Your session has expired. Please log in again.
          </AlertDescription>
        </Alert>
      </div>
    </Example>
  );
}

function ProgressExample() {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Example title="Progress">
      <div className="w-full max-w-md space-y-4">
        <Progress value={progress} />
        <Progress value={33} />
        <Progress value={80} />
      </div>
    </Example>
  );
}

function SkeletonExample() {
  return (
    <Example title="Skeleton">
      <div className="flex items-center space-x-4">
        <Skeleton className="size-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    </Example>
  );
}

// =============================================================================
// LAYOUT
// =============================================================================

function ScrollAreaExample() {
  const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`,
  );

  return (
    <Example title="ScrollArea">
      <ScrollArea className="h-72 w-48 rounded-md border">
        <div className="p-4">
          <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
          {tags.map((tag) => (
            <React.Fragment key={tag}>
              <div className="text-sm">{tag}</div>
              <Separator className="my-2" />
            </React.Fragment>
          ))}
        </div>
      </ScrollArea>
    </Example>
  );
}

function SeparatorExample() {
  return (
    <Example title="Separator">
      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium">Radix Primitives</h4>
          <p className="text-muted-foreground text-sm">
            An open-source UI component library.
          </p>
        </div>
        <Separator />
        <div className="flex h-5 items-center space-x-4 text-sm">
          <div>Blog</div>
          <Separator orientation="vertical" />
          <div>Docs</div>
          <Separator orientation="vertical" />
          <div>Source</div>
        </div>
      </div>
    </Example>
  );
}

// =============================================================================
// DATE & CALENDAR
// =============================================================================

function CalendarExample() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Example title="Calendar">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    </Example>
  );
}
