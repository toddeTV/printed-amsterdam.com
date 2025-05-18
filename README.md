# printed-europe.com

This is the project for the [printed-europe.com](https://printed-europe.com) conference website build with ❤️ &
[NuxtJS](https://github.com/nuxt/nuxt).

## Sponsoring

If you like this project and want to support us, we would be very happy to see you as a sponsor on GitHub ❤️<br>
You can find the `Sponsor` button on the top right of the
[GitHub project page](https://github.com/toddeTV/printed-europe.com).<br>
Thanks a lot for the support <3

## Production

Currenly no deployment.

<!-- TODO -->

## Development

### Info

This project uses `node` with `pnpm` as default package manager.

### Getting Started

1. Clone the repository.
2. Install dependencies:
   ```sh
   pnpm install --frozen-lockfile
   ```
3. No `.env` file is required for this project at the moment.
4. Happy coding! ❤️

### lint and prettier

This project uses lint also for formatting. Read
[why Prettier is not used for every file type](https://antfu.me/posts/why-not-prettier) by antfu.

This project uses [antfu/eslint-config](https://github.com/antfu/eslint-config) for eslint most of the files.

Keep in mind that the plugin names are renamed, see
[Plugins Rename](https://github.com/antfu/eslint-config?tab=readme-ov-file#plugins-renaming), e.g.:

```diff
-// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
+// eslint-disable-next-line ts/consistent-type-definitions
type foo = { bar: 2 }
```

### Design Guidelines

<!-- TODO -->

## Contribution & Attribution

### Project Contributors

<a href="https://github.com/toddeTV/printed-europe.com/graphs/contributors">
<img src="https://contrib.rocks/image?repo=toddeTV/printed-europe.com" />
</a>

### Current Core Team Members

- [Thorsten Seyschab](https://todde.tv) as Project Founder & Lead.

### Acknowledgments

**Special Thanks:**<br>
_(People who provided valuable help on specific topics or issues)_

- [Alexander Lichter](https://github.com/TheAlexLichter) as a guest on one of the Twitch live streams,
  contributing to the brainstorming & creation of the main project structure.
- [Andreas Fehn](https://github.com/fehnomenal) as a guest on one of the Twitch live streams, contributing
  to the creation of the data model for the content collections and schemas.

**Helpful Projects:**<br>
_(Projects that provided valuable inspiration or resources.)_

- \[currently none\]

**Additional Tools:**<br>
_(excluding those listed in `./package.json`)_

- [Twitch @toddeTV](https://twitch.tv/toddeTV) was used for live streaming the development of this project.
- [GitHub Copilot](https://github.com/features/copilot) was used in private mode for programming questions.

**Assets & Materials Used:**<br>
_(including images & 3D models; mostly only those requiring attribution)_

- \[currently none\]

## License

The source code in this repository is licensed under the [MIT License](./LICENSE.md).

⚠️ **Important Notice Regarding Content**<br>
The contents of the `/content`, `/public`, and `/assets` directories (such as media files, 3D models,
JSON/YAML/Markdown data, etc.) are **not** licensed under MIT.<br>
These materials remain the intellectual property of their respective creators and are included here
only for use within this project.

You **may not** reuse, redistribute, or repurpose these materials without obtaining explicit permission
from their authors.

Please refer to the [LICENSE.md](./LICENSE.md) file for full details.
