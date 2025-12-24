# Bottom Navigation Implementation Rules

## Overview
This rule defines the standards and implementation guidelines for creating mobile bottom navigation components in the Addrezza project.

## Core Principles

### 1. Mobile-First Design
- Bottom navigation should ONLY appear on mobile devices (< 768px)
- Use `md:hidden` class to hide on tablets and desktop
- Desktop users should use sidebar navigation instead

### 2. Essential Navigation Items
- Limit to 5 key navigation items maximum
- Choose the most frequently used features
- Prioritize user workflow and common tasks
- Avoid overcrowding the navigation bar

### 3. App-Like Experience
- Fixed positioning at bottom of screen
- Always visible and accessible
- Touch-friendly spacing and targets
- Smooth transitions and hover states

## Implementation Standards

### Component Structure
```typescript
// File: src/app/[locale]/components/userComponents/BottomNav.tsx
"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconName } from "lucide-react";

const navItems = [
  {
    label: "Label",
    icon: IconComponent,
    path: "/route/path",
  },
  // ... up to 5 items
];

const BottomNav = () => {
  const pathname = usePathname();
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-sm border-t border-slate-200 w-full overflow-x-hidden">
      <div className="grid grid-cols-5 w-full">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = pathname === item.path;
          
          return (
            <Link
              key={index}
              href={item.path}
              className={`flex flex-col items-center justify-center py-3 px-2 transition-colors duration-200 ${
                isActive
                  ? "text-[#391885]"
                  : "text-slate-600 hover:text-[#391885]"
              }`}
            >
              <Icon className="h-5 w-5 mb-1" />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
```

### Layout Integration
```typescript
// File: src/app/[locale]/components/userComponents/UserLayout.tsx
import BottomNav from "./BottomNav";

// Add to layout component:
<div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-slate-100 overflow-x-hidden">
  {/* Desktop Sidebar - Fixed */}
  <div className="hidden lg:block">
    <Sidebar />
  </div>

  {/* Main Content Area */}
  <div className="lg:ml-64 w-full overflow-x-hidden">
    {/* Header */}
    <header>...</header>

    {/* Main Content */}
    <main className="w-full overflow-x-hidden">
      <div className="w-full mx-auto max-w-7xl p-4 md:p-6 lg:p-8 pb-20 md:pb-6">
        {children}
      </div>
    </main>
  </div>

  {/* Mobile Bottom Navigation */}
  <BottomNav />
</div>
```

## Styling Guidelines

### Container Styling
- **Position**: `fixed bottom-0 left-0 right-0`
- **Z-index**: `z-50` (above content, below modals)
- **Background**: `bg-white/95 backdrop-blur-sm`
- **Border**: `border-t border-slate-200`
- **Width**: `w-full overflow-x-hidden`
- **Display**: `md:hidden` (mobile only)

### Grid Layout
- **Grid**: `grid grid-cols-5` for 5 items
- **Width**: `w-full` for full container width
- **Equal spacing**: Each item takes 1/5 of the width

### Item Styling
- **Layout**: `flex flex-col items-center justify-center`
- **Padding**: `py-3 px-2` for touch-friendly targets
- **Transitions**: `transition-colors duration-200`
- **Icons**: `h-5 w-5 mb-1` for consistent sizing
- **Labels**: `text-xs font-medium` for compact display

### Active States
- **Active**: `text-[#391885]` (primary brand color)
- **Inactive**: `text-slate-600`
- **Hover**: `hover:text-[#391885]`
- **Detection**: Use `usePathname()` to match current route

## Content Padding Requirements

### Main Content Padding
- **Mobile**: `pb-20` (space for bottom nav)
- **Desktop**: `md:pb-6` (normal padding)
- **Implementation**: `pb-20 md:pb-6`

### Overflow Prevention
- **Global**: Add `overflow-x: hidden` to `html, body` in globals.css
- **Layout**: Add `overflow-x-hidden` to all container levels
- **Width**: Use `w-full` and `max-width: 100vw` constraints

## Navigation Item Selection

### Recommended Items (5 maximum)
1. **Home/Dashboard** - Primary landing page
2. **Address** - Core feature access
3. **Devices** - Device management
4. **Invest/Notifications** - Secondary features
5. **Settings** - User preferences

### Icon Guidelines
- Use Lucide React icons for consistency
- Choose intuitive, recognizable icons
- Maintain consistent sizing (`h-5 w-5`)
- Ensure icons work well at small sizes

### Label Guidelines
- Keep labels short and clear
- Use 1-2 words maximum
- Consider internationalization
- Test readability at small sizes

## Responsive Behavior

### Mobile (< 768px)
- Bottom navigation visible
- Fixed at bottom of screen
- Touch-friendly interaction
- Content padding to prevent overlap

### Desktop/Tablet (≥ 768px)
- Bottom navigation hidden
- Sidebar navigation used instead
- Normal content padding
- No bottom navigation interference

## Accessibility Requirements

### Touch Targets
- Minimum 44px touch target size
- Adequate spacing between items
- Clear visual feedback on interaction

### Screen Readers
- Proper semantic HTML structure
- Descriptive link text
- Clear navigation landmarks

### Keyboard Navigation
- Tab order follows visual layout
- Clear focus indicators
- Accessible interaction patterns

## Performance Considerations

### Rendering
- Use `usePathname()` for active state detection
- Minimize re-renders with proper key props
- Optimize icon imports

### Mobile Performance
- Lightweight component structure
- Efficient CSS classes
- Minimal JavaScript overhead

## Testing Requirements

### Visual Testing
- Test on various mobile screen sizes
- Verify touch target accessibility
- Check active state accuracy
- Validate responsive behavior

### Functional Testing
- Test navigation to all routes
- Verify active state detection
- Check overflow prevention
- Test with different content lengths

## Common Pitfalls to Avoid

### ❌ Don't Do
- Don't use more than 5 navigation items
- Don't show bottom nav on desktop
- Don't forget content padding
- Don't ignore overflow prevention
- Don't use unclear icons or labels

### ✅ Best Practices
- Keep navigation items essential
- Use consistent styling
- Test on real mobile devices
- Follow accessibility guidelines
- Maintain brand consistency

## Maintenance Guidelines

### Updates
- Update navigation items when core features change
- Maintain consistent styling across updates
- Test thoroughly after any modifications
- Document changes in component comments

### Monitoring
- Track user interaction with navigation items
- Monitor performance impact
- Check for accessibility issues
- Validate responsive behavior

## Integration Checklist

When implementing bottom navigation:

- [ ] Create BottomNav component with proper structure
- [ ] Add 5 essential navigation items
- [ ] Implement active state detection
- [ ] Add mobile-only display (`md:hidden`)
- [ ] Update layout with proper padding
- [ ] Add overflow prevention
- [ ] Test responsive behavior
- [ ] Verify accessibility
- [ ] Check touch targets
- [ ] Validate brand consistency

This rule ensures consistent, accessible, and user-friendly bottom navigation implementation across the Addrezza platform.
