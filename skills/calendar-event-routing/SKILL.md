---
name: calendar-event-routing
description: Route new Google Calendar events to the user's existing calendar by inferring the event's context (for example, job-hunting events go to the 「就活」 calendar). Use when the user asks to add, schedule, or register an event.
---

# Calendar Event Routing

When registering an event, choose its owning calendar from the event content before creating it. The calendar choice is more important than the event color: do not simulate a calendar assignment by changing `color_id` on the primary calendar.

## Routing

Infer the most relevant category from the title, organizer, venue, URL, and surrounding user message. Use these mappings when the corresponding calendar exists:

- Job hunting, recruiting, company interviews, information sessions, selection steps, entry sheets, or career fairs → 「就活」
- Graduate-school classes, lectures, seminars, or coursework → 「大学院前期　授業」
- Work shifts or employer-related work → 「バイト」
- Club or student-organization activities → 「サークル関係」
- Driving-school lessons or tests → 「教習所」
- Birthdays → 「誕生日」
- Personal to-dos/reminders → 「ToDo リスト」

Treat the user's explicit category as authoritative. If the context clearly implies a category, use it without asking the user to repeat it. If two categories are genuinely plausible or no matching calendar exists, ask a concise clarification rather than silently using the primary calendar.

## Calendar operations

1. List the user's calendars and match by the exact visible summary (for example, 「就活」). Use the returned calendar `id` as `calendar_id`.
2. Create the event directly on that calendar. Do not create it on `primary` and then recolor it.
3. Preserve all supplied details: date, start time, end time or a clearly stated duration assumption, timezone, location, and links. Put an externally supplied Google Meet URL in the description and set `add_google_meet` to false.
4. Before creating, search the target calendar in the requested time window when a duplicate is reasonably possible. Avoid creating a second copy of the same event.
5. For an already-created event on the wrong calendar, only perform a move (create on the target calendar and remove the old copy) when the user has asked to correct or move it; otherwise leave it unchanged and explain the limitation.

The event's calendar membership is the category/tag the user means in this workflow. Event color is a separate setting and should only be changed when explicitly requested.
